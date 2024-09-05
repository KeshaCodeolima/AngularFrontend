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
    this.http.post('http://127.0.0.1:5000/forgetemail',senddata).subscribe(res=>{
      console.log("Email Send Successful",res);
      alert("Forget password page link send to Your Email.");
    },error=>{console.log("Your Email is not send",error);
      alert("Your Email is not Send Check Your Email")
    })
  }
}
