import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {MemberComponent} from "./member/member.component";
import {SignupComponent} from "./signup/signup.component";
import {EmailComponent} from "./email/email.component";

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'members', component: MemberComponent}
  //{ path: 'members', component: MemberComponent, canActivate: [AuthService] }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
