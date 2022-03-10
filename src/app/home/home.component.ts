import { Router } from '@angular/router';
import { AliServiceService } from './../services/ali-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private aliServiceService: AliServiceService,private router: Router)
  {
    this.loginValue=aliServiceService.isUserLogin();
   }

  ngOnInit(): void {
  }

  logout()
  {
    this.aliServiceService.logout();
    this.router.navigate(['']);
  }

  loginValue:boolean;

  checkingHaveYouLogoutAndLogin()
  {
    console.log('Home Wasti : '+this.aliServiceService.isUserLogin());
    this.loginValue=this.aliServiceService.isUserLogin();
  }

}
