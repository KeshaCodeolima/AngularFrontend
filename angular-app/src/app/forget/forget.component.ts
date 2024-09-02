import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css'
})
export class ForgetComponent {
  email:String='';
  new_password:String='';

  constructor(private http:HttpClient, private router:Router){}

  onforget(){
    const forgetData ={
      email:this.email,
      password:this.new_password
    };
    this.http.post('http://127.0.0.1:5000/update',forgetData).subscribe(res=>{
      console.log("Successfully Change the password",res);
      alert("Successfully Change the password");
      this.router.navigate(['/login'])
    },error=>{console.log("password is not change ",error);
    });
  }
}

