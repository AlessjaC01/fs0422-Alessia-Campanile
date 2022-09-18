import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ILogin } from '../Models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    this.auth.login(this.loginData).subscribe(res => {
      this.auth.saveInfoData(res)
      this.auth.navigate('/dashboard')
    })
  }

  loginData:ILogin = {
    email:'',
    password:''
  }

}
