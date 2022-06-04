import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  isSubmitted = false;
  constructor(private global: GlobalService, private router: Router) {}
  signupt = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    name: new FormControl(''),
    userType: new FormControl(''),
  });

  ngOnInit(): void { }
  
  handelSignup() {
    console.log(this.signupt);
    this.isSubmitted = true;
    if (this.signupt.valid) {
      this.global.signup(this.signupt.value).subscribe((res) => {
        console.log(res);
      });
    }
  }

  get userInfo() {
    return this.signupt.controls;
  }
}
