import { AliServiceService } from './../services/ali-service.service';
import {  OnInit } from '@angular/core';
import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

interface Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    id: 1,
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  }
];

export type SortColumn = keyof Country | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}
@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {




  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  aliServiceUnsubcribe = new Subscription();


  countries = COUNTRIES;
  SecondProcutList:any = [];
  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.countries = COUNTRIES;
    } else {
      this.countries = [...COUNTRIES].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }


  constructor(private aliServiceService: AliServiceService)
  {
    console.log("in app component");
        aliServiceService.getAllCustomerData().subscribe(
          (response:any)=>{
            this.SecondProcutList=response;
            console.log("in app component");

           console.log(response);
          });
}

deleteCustomerUserById(data:any)
{

  Swal.fire({
    title: 'Are you sure? to delete '+data,
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {

      this.aliServiceService.deleteUserByIdFinal(data).subscribe(
        (deleEmp:any) => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        });
    }
  })

}


ngOnDestroy(): void {
  this.aliServiceUnsubcribe.unsubscribe();
}

}

