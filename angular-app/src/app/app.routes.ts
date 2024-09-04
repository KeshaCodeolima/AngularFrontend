import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgetComponent } from './forget/forget.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component:HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {path:'froget', component:ForgetComponent},
    {path:'admin', component:AdminComponent},
    {path:'contact', component:ContactComponent}
];
