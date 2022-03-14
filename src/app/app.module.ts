import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {MatInputModule} from '@angular/material/input';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { DeliveredQuantityComponent } from './delivered-quantity/delivered-quantity.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    ContactComponent,
    CustomerComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    MainComponent,
    AddEmployeeComponent,
    CustomerDetailsComponent,
    DeliveredQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatProgressBarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
