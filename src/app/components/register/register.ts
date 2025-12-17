import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/users';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register  implements OnInit{
  isloading:boolean=false;
  passwordMismatch:boolean=false;
  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.minLength(4),Validators.maxLength(50),Validators.required]),
    phone:new FormControl(null,[Validators.minLength(10),Validators.maxLength(15)]),
    role:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.minLength(4),Validators.required]),
    confirmPassword:new FormControl(null,[Validators.required])
  });
  constructor(private _auth:AuthService,private _route:Router){
     this.registerForm.valueChanges.subscribe(val => {
      const { password, confirmPassword } = val;
      this.passwordMismatch =(password !== confirmPassword);
    });
  }
  ngOnInit(): void {
    
  }
  registerData(registerval:FormGroup){
    this.isloading=true;
    if(registerval.valid){
     let user:User={
      name: registerval.value.name,
      email:registerval.value.email,
      phone:registerval.value.phone,
      role:registerval.value.role,
      password:registerval.value.password
     };
     console.log(user.name);     
     console.log(user.role);

       this._auth.signup(user).then(uid => {
      console.log("User UID:", uid);
     this._route.navigate(['/home']);
      alert("Your account has been created!");
    })
    .catch(err => {
      console.log(err);
      alert(err.message);
    });
    
  }
  }
}
