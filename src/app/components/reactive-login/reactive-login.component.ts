import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('test', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  get username(): AbstractControl {
    return this.loginForm.controls.username;
  }
  get password(): AbstractControl {
    return this.loginForm.controls.password;
  }

  constructor(private builder: FormBuilder ) {   }

  ngOnInit(): void {
  }

  login(){
    const controls = this.loginForm.controls;
    console.log('User:' + controls.username.value);
    console.log('Password:' + controls.password.value);
  
  }

  private buildForm() {
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }

}
