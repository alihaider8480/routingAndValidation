import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AliguardsGuard } from './guards/aliguards.guard';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,

   },

    {
      path:"home",
      component:HomeComponent,
      children:[
        {
          path:"blog",
          component:BlogsComponent
        },
        {
          path:"contact",
          component:ContactComponent
        },
        {
          path:"customer",
          component:CustomerComponent
        },
        {
          path:"addEmployeeData",
          component:AddEmployeeComponent
        },
      ]
    },



  {
    path: '**',                        // agar koi bhi url ni mila ga to ya guards chala ga
    component:NotFoundComponent
  }
  // iska bad koi routing ni karo sab iska upar karo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
