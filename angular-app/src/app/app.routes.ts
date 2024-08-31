import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'home', component: RegisterComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];
