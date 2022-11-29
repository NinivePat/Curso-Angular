import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  
  constructor( private loginService:LoginService){



    
  }
  
  ngOnInit(): void {

    firebase.initializeApp({
      
      apiKey: "AIzaSyCe-Z5lqm04uzGyS9ZmQ_6aAeyLDObXq6U",
  authDomain: "mis-clientes-1768e.firebaseapp.com",

    });

  
  }

  estaLogueado(){
    
    return this.loginService.estaLogueado();

  }

  logout(){
    this.loginService.logout();

  }
  
  
}
