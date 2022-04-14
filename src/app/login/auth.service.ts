import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { environment, firebaseConfig } from 'src/environments/environment';
import { loginResponse } from './loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseURl: string = "https://identitytoolkit.googleapis.com/v1/accounts";
signUpendpoint: string = "signUp";
signInendpoint: string = "signInWithPassword";
public constructor (private http:HttpClient)
{

}
public signUp(email: string, password: string)
{
  const requestBody = {
    "email":email,
    "password":password,
    "returnSecureToken": true
  };
  return this.http.post<loginResponse>(this.baseURl + ':' + this.signUpendpoint + '?' + 'key=' + firebaseConfig.apiKey, requestBody);
}

public login(email: string, password: string)
{
  const requestBody = {
    "email":email,
    "password":password,
    "returnSecureToken": true
  };

  return this.http.post<loginResponse>(this.baseURl + ':' + this.signInendpoint + '?' + 'key=' + firebaseConfig.apiKey, requestBody);
  
}
}