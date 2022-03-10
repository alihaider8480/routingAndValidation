import { Router } from '@angular/router';
import { AliServiceService } from './../services/ali-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private aliServiceService: AliServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.aliServiceService.logout();
    this.router.navigate(['']);
  }

}
