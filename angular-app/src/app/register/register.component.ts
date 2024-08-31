import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  name: string = '';
  email: string = '';
  phonenumber: string = '';
  password: string = '';

   constructor(private http: HttpClient){}


   onRegister() {
    const userData = {
      name: this.name,
      email: this.email,
      phonenumber: this.phonenumber,
      password: this.password
    };

    this.http.post('http://127.0.0.1:5000/register', userData)
      .subscribe(response => {
        console.log('Registration Successful', response);
      }, error => {
        console.log('Registration Failed', error);
      });
  }
}
