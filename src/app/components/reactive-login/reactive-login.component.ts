import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {


  get username(): AbstractControl {
    return this.loginForm.controls.username;
  }
  get password(): AbstractControl {
    return this.loginForm.controls.password;
  }

  login(){
    const controls = this.loginForm.controls;
    console.log('User:' + controls.username.value);
    console.log('Password:' + controls.password.value);
  
  }

  loginForm = new FormGroup({
    username: new FormControl('test', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor() { }

  ngOnInit(): void {
  }

  heroDetails = new FormGroup({
    name: new FormControl(''),
    realName: new FormControl(''),
    biometricData: new FormGroup({
      age: new FormControl(''),
      eyes: new FormControl(''),
      hair: new FormControl('')
    })
  })

}
