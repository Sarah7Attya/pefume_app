   
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // Validators.pattern()
    password: new FormControl('', [Validators.required ]) //  Validators.minLength(8), Validators.maxLength(15)
  })

  isSubmitted = false
  constructor(private global : GlobalService , private router : Router) { }

  get email(){return this.loginForm.get("email")}

  get userInfo(){return this.loginForm.controls}

  ngOnInit(): void {
  }

  handelogin() {
    this.isSubmitted = true
  console.log(this.loginForm)
    if(this.loginForm.valid){
      this.global.login(this.loginForm.value).subscribe(res=>{
        console.log(res)
        this.router.navigate([''])
        // if(res.userType == user){
        //   this.router.navigateByUrl("home")
        //   this.global.navFlag = true
        // }
        // this.router.navigate(['successLogin'])
        // this.global.navFlag=true
        // localStorage.getItem("token", res.access_token)
        // this.global.isLogIn=true
      } , ()=>{

      },()=>{

      })
    }
  }

}