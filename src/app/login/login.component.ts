import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { loginResponse } from './loginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public buttonClicked!:string;
  private authObservable!: Observable<loginResponse>
  constructor(private authService:AuthService)
  {

  }
public onSubmit(data: NgForm)
{
  console.log("Button Clicked.");
  console.log(data.value);

if (this.buttonClicked == 'Sign Up')
{
  this.authObservable = this.authService.signUp(data.value.email, data.value.password);
}
if (this.buttonClicked == 'Login')
{
  this.authObservable = this.authService.login(data.value.email, data.value.password);
}
  
  this.authObservable.subscribe((data:loginResponse) => {
      console.log(data);
  },
  error => {
    console.log(error.error);
  }
  );

  data.resetForm();
}
}
