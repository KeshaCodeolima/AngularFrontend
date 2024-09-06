import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  name:String='';
  email:String='';
  message:String='';

  constructor(private http:HttpClient){}

  onsubmit(){
    const maildata= {
      name:this.name,
      email:this.email,
      message:this.message,
    };
    this.http.post("http://127.0.0.1:5000/usercomment",maildata).subscribe(res=>{
      console.log("Mail Send Succeful",res);
      alert("Your Email Send Successful");
    },error=>{console.log("Mail not send Successful",error);
    });
  }
}
