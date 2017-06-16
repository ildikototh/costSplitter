import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { AuthService } from './shared/services/auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'members', component: MemberComponent, canActivate: [AuthService] },
  { path: 'home', component: HomeComponent},
  { path: 'expenses', loadChildren: './expenses/expenses.module.ts#ExpensesModule' },
  { path: '**', component: NotfoundComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
