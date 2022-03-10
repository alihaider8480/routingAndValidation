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

  constructor(private aliServiceService: AliServiceService,

    )
  {

  }

  progStatus=false;

  employee={
    name:'',
    address:'',
    quantity:''

  }

  ngOnInit(): void {
  }

  addNewEmployeeDatas()
  {
    this.progStatus=true;
    this.aliServiceService.submitNewemployee(this.employee).subscribe(
      (response:any)=>{
        this.progStatus=false;
        Swal.fire("Success!","Employee Added","success");
      },
      (error)=>{
        this.progStatus=false;
        Swal.fire("Error!",""+error,"error");
      }
    );
  }

  ngOnDestroy(): void {
    this.aliServiceUnsubscribeVariable.unsubscribe();
  }

}
