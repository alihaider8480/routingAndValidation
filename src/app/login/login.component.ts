import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AliServiceService } from './../services/ali-service.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  progStatus=false;

  constructor(private aliServiceService: AliServiceService,private fb: FormBuilder,private _router:Router)
  {

   }

   loginForm=this.fb.group({
     name:['',[Validators.required]],
     password:['',[Validators.required]],
   });

  ngOnInit(): void {
  }


  emp ={
    name: '',
    password:''
  }

  loginMethod()
  {
    if(this.loginForm.status=='VALID')  // ya is lia agar form ma khali button dabao to ya check karaga field bhari wi ha ya ni
    {
    this.aliServiceService.getloginInformation(this.loginForm.value).subscribe(
      (getLog:any) => {
        if(getLog!=null) // ya wala if is lia lagaya ha kio ga ghalat dalna pa bhi chal raha tha ab java sa null ae ga to ya dakha ga
        {
        //Swal.fire("Success","Submitted SuccessFuly");
        localStorage.setItem('userData',JSON.stringify(getLog));
         this._router.navigate(['/home']);
                console.log('subscribe : '+getLog);
        }
        else{
          Swal.fire("Error!","Incorrect Details","error");
        }
      },
      (error:any) => {
        // this.progStatus=true; ya progrress bar ka lia hai
        Swal.fire("Error!",""+error,"error");
        console.log('your Error Is : '+error);
         }
      );
    }
  }
}
