import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

import { reservedNameValidator } from 'src/app/directives/reserved-name.directive';

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

  constructor(private builder: FormBuilder ) { 

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

  ngOnInit(): void {
  }

  heroDetails = new FormGroup({
    name: new FormControl('', reservedNameValidator()),
    realName: new FormControl(''),
    biometricData: new FormGroup({
      age: new FormControl(''),
      eyes: new FormControl(''),
      hair: new FormControl('')
    }),
    powers: new FormArray([])
  })

  get powers(): FormArray {
    return this.heroDetails.controls.powers as FormArray;
  }

  addPower() {
    this.powers.push(new FormControl(''));
  }

}
