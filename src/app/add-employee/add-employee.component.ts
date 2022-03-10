import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeForm: any;  // wasa iski type FromGroup hai

  constructor(private fb: FormBuilder)
  {

  }


  ngOnInit(): void {
    this.addEmployeeForm = this.fb.group( {
      id: ['',[Validators.required]],
      firstName: ['',[Validators.required ,Validators.minLength(2) , Validators.maxLength(4)]],
      lastName: ['',Validators.required , Validators.maxLength(4)],
      email: ['' , Validators.required , Validators.email,Validators.maxLength(60)],
      alternateEmail:this.fb.array([])
    });
  }

  get f()              // get ka method hamasha return karta hai or is ma FormBuilder matlab form ka tamam console ka data is f ka method ma aje ga
  {                    // ab ma isko call karka html ma compaire karwa sakta ho
   return this.addEmployeeForm.controls;
  }

  get alternateEmailArray(){
    return this.addEmployeeForm.get('alternateEmail') as FormArray;
  }

  addEmployee(data:any){
    console.log(this.addEmployeeForm);         // this.addEmployeeForm.value agar ma ya karonga to form ki tamam values ajae gi parameter ma
  }

  addAlternateEmail(){
    this.alternateEmailArray.push(this.fb.control(''));
  }


  addMockData()
  {
    this.addEmployeeForm.get('id')?.setValue('110');
    this.addEmployeeForm.get('firstName')?.setValue('Mock Ali');
    this.addEmployeeForm.get('lastName')?.setValue('Moc');
    // this.addEmployeeForm.get('email')?.setValue('test@test.com');
  }
}
