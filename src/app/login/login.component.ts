import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AliServiceService } from './../services/ali-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private aliServiceService: AliServiceService,private fb: FormBuilder,private _router:Router)
  {

   }
// ddddd

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
    this.aliServiceService.getloginInformation(this.loginForm.value).subscribe(
      (getLog:any) => {
        localStorage.setItem('userData',JSON.stringify(getLog));
         this._router.navigate(['/home']);
                console.log(getLog);
      }
      );
  }

}
