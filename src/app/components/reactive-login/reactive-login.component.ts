import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {

  username: string;
  password: string;

  login(){
    const controls = this.loginForm.controls;
    console.log('User:' + controls.username.value);
    console.log('Password:' + controls.password.value);
  
  }

  loginForm = new FormGroup({
    username: new FormControl('tét'),
    password: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
