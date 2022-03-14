import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { AliServiceService } from '../services/ali-service.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {


  aliServiceUnsubcribe = new Subscription();


  SecondProcutList:any = [];

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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

deleteUserById(data:any)
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
