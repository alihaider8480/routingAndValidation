import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AliServiceService } from '../services/ali-service.service';

@Component({
  selector: 'app-delivered-quantity',
  templateUrl: './delivered-quantity.component.html',
  styleUrls: ['./delivered-quantity.component.css']
})
export class DeliveredQuantityComponent implements OnInit {

  myForm: any;
  constructor(private aliServiceService: AliServiceService,private fb2: FormBuilder ) { }

  get f()              // get ka method hamasha return karta hai or is ma FormBuilder matlab form ka tamam console ka data is f ka method ma aje ga
  {                                   // ab ma isko call karka html ma compaire karwa sakta ho
    return this.myForm.controls;
  }

  ngOnInit(): void {
    this.myForm = this.fb2.group({
      serialNumber: ['',[Validators.required]],
      name: [''],
      deliveredQuantity: ['']
    })
  }

  name:any;

  findbyserialNumber()
  {
      this.aliServiceService.getByIDCustomerData(this.myForm.value).subscribe(
        (foundID:any) => {
          this.name = foundID.name;
        });
  }

  updateDeliveryRecords()
  {
    console.log();

    this.aliServiceService.updateCustomerDeliveryData(this.myForm.value).subscribe(
      (foundID:any) => {
        this.name = foundID.name;
      });
  }

}
