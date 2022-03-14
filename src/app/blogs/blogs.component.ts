import { FormBuilder, Validators } from '@angular/forms';
import { AliServiceService } from './../services/ali-service.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  aliServiceUnsubscribeVariable = new Subscription();

  constructor(private aliServiceService: AliServiceService,private fb2: FormBuilder )
  {

  }

  addEmployeeForm: any;  // wasa iski type FromGroup hai


  progStatus=false;

  ngOnInit(): void {
    this.addEmployeeForm = this.fb2.group({
      serialNumber: ['',[Validators.required]],
      name: ['',[Validators.required,Validators.minLength(4) ]],
      address: ['' , [Validators.required,Validators.minLength(4)]],
      number: ['',[Validators.required, Validators.pattern("^((\\+92-?)|0)?[0-9]{11}$")]],
      email: ['',[Validators.email]],
      block: [''],
      persolBottle: [''],
      deliveredQuantity: [''],
      status: ['',],
      price: ['',[Validators.required]],
      comments: ['']
    })
  }

  get f()              // get ka method hamasha return karta hai or is ma FormBuilder matlab form ka tamam console ka data is f ka method ma aje ga
  {                                   // ab ma isko call karka html ma compaire karwa sakta ho
    return this.addEmployeeForm.controls;
  }

  checkallvaluesinConsole(data:any)
  {
    console.log(this.addEmployeeForm);  //iska sath koi string add ni karna object null dikahae ga ya warna
  }

  addNewEmployeeDatas()
  {
    this.progStatus=true;
    console.log(this.addEmployeeForm);
    this.aliServiceService.insertNewCustomerData(this.addEmployeeForm.value).subscribe(
      (response:any)=>{
        if(response==null)
        {
          this.progStatus=true;
          Swal.fire("Error!","SerialNumber Already Exist","error");
          this.progStatus=false;
        }
        else
        {
          this.progStatus=false;
          Swal.fire("Success!","Employee Added","success");
        }
      },
      (error)=>{
        this.progStatus=true;
        Swal.fire("Error!",""+error,"error");
        this.progStatus=false;

      }
    );
  }

  ngOnDestroy(): void {
    this.aliServiceUnsubscribeVariable.unsubscribe();
  }

}
