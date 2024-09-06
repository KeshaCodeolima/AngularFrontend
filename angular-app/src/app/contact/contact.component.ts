import { Component } from '@angular/core';
import emailjs, {EmailJSResponseStatus} from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_oy4at6h', 'template_xw6se89', e.target as HTMLFormElement,'6B8ivzkQOW-eECsqa')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
