import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { User } from '../../interfaces/users';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {


  isloading:boolean=false;
  loginForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.minLength(4),Validators.required])
    
  });
  constructor(private _auth:AuthService,private _router:Router){
  }
  ngOnInit(): void {
    
  }
  loginData(data:FormGroup){
    this.isloading=true;
    if(data.valid){
      
   
let user:User=data.value;
    this._auth.login(user).then(uid => {
 // this._cart.setCartId(uid);  
     // 👈 تحديث cartId بعد login
}); }
 
    /*this._auth.signin(data.value).subscribe({
      next:(response)=>{
        if(response.message==='success')
        {
          this.isloading=false;
          localStorage.setItem('userToken',response.token);
          this._auth.saveData();
          this._router.navigate(['/home']);
        }
        else
        {}
        this.isloading=false;
      }
    })*/
  }
}
