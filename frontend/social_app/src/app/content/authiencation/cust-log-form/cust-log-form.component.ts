import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cust-log-form',
  templateUrl: './cust-log-form.component.html',
  styleUrl: './cust-log-form.component.css'
})
export class CustLogFormComponent {
  CustomerLogin:FormGroup;
  constructor(){
    this.CustomerLogin=new FormGroup({
      userName:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }
submit(){
console.log('formsubmitted',this.CustomerLogin.value);
}
backHome(){

}
}
