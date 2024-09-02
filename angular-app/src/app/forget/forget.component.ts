import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css'
})
export class ForgetComponent {
  email:String='';
  password:String='';

  constructor(private http:HttpClient){}

  onforget(){
    const forgetData ={
      email:this.email,
      password:this.password
    };
    this.http.post('http://127.0.0.1:5000/update',forgetData).subscribe(res=>{
      console.log("Successfully Change the password",res);
      alert("Successfully Change the password");},
      error=>{console.log("password is not change ",error);
      })
  }
}
