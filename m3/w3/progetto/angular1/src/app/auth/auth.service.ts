import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from './Models/login';
import { IRegister } from './Models/register';

type AuthResponse = {
  accessToken: string,
  user: {
    email: string,
    id: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  navigate(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  apiUrl:string = 'http://localhost:3000'

  register(registerData:IRegister){
    return this.http.post<AuthResponse>(this.apiUrl + '/register', registerData)
  }

  login(loginData:ILogin){
    return this.http.post<AuthResponse>(this.apiUrl + '/login', loginData)
  }

  userLogged():boolean{
    return localStorage.getItem('access') != null;
  }

  getLoggedUser():boolean{
    let db = localStorage.getItem('access')
    return db ? JSON.parse(db).user : null
  }

  getAccessToken():boolean{
    let db = localStorage.getItem('access')
    return db ? JSON.parse(db).accessToken : null
  }

  saveInfoData(data:AuthResponse){
    localStorage.setItem('access', JSON.stringify(data))
  }

  logOut(){
    localStorage.removeItem('access')
  }

}
