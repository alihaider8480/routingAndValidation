import { AliServiceService } from './../services/ali-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private aliServiceService: AliServiceService)
  {

   }


  ngOnInit(): void {
  }

  emp ={
    name: '',
    password:''
  }

  loginMethod()
  {
      console.log('sssssssss :'+this.emp.name);

    this.aliServiceService.getloginInformation(this.emp).subscribe(
      (getLog) => {

      });
  }

}
