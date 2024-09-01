import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: String ='';
  password: String='';

  constructor(private http:HttpClient){}

  onLogin(){
    const LoginData ={
      email:this.email,
      password:this.password,
    };
    this.http.post('http://127.0.0.1:5000/login',LoginData).subscribe(res =>{
      console.log("Login Successful",res);
    },error =>{console.log("Login Unsuccessful",error);
    });
  }
}
