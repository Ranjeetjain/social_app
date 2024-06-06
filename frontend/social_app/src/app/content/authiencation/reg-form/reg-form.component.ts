import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrl: './reg-form.component.css'
})
export class RegFormComponent {
CustomerDetail:FormGroup;
constructor(){
  this.CustomerDetail=new FormGroup({
    firstName:new FormControl(['',Validators.required]),
    lastName:new FormControl(['',Validators.required]),
    Email:new FormControl(['',Validators.required]),
    url1:new FormControl(['',Validators.required]),
    url2:new FormControl(['',Validators.required])
  })
}
submit(){
  console.log('form submitted',this.CustomerDetail.value);
}
}
