import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IRegister } from '../Models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  save(){
    this.auth.register(this.registerData).subscribe(res => {
      alert('utente $(res.user.email) sgamato')
    })
  }


  registerData:IRegister = {
    username: '',
    email:'',
    password:''
  }
}
