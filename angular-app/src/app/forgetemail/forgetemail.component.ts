import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgetemail',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './forgetemail.component.html',
  styleUrl: './forgetemail.component.css'
})
export class ForgetemailComponent {

  email:String='';

  constructor(private http:HttpClient){}

  onforgetemail(){
    const senddata = {
      email:this.email
    };
    this.http.post<any>('http://127.0.0.1:5000/forgetemail',senddata).subscribe(
      res=>{
        if(res.message === "Email Send Successful"){
          console.log("Email Send Successful",res);
          alert("Forget password page link sent to your email.");
        } else if (res.message === 'Email not found.') {
          console.log('Email not found', res);
          alert('The email address is not registered.');
        }
      },
      error => {
        console.log('Error occurred:', error);
        alert('An error occurred. Please try again later.');
      }
    );
  }
}
