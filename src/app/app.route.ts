import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {MemberComponent} from "./member/member.component";
import {AuthService} from "./shared/services/auth.service";
import {SignupComponent} from "./signup/signup.component";
import {EmailComponent} from "./email/email.component";
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {GroupJoinContainerComponent} from "./group/group-join-container/group-join-container.component";

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'members', component: MemberComponent, canActivate: [AuthService] },
  { path: 'home', component: HomeComponent},
  { path: 'groups/:id', component: GroupJoinContainerComponent, canActivate: [AuthService]},
  { path: 'expenses', canActivate: [AuthService], loadChildren: './expenses/expenses.module.ts#ExpensesModule' },
  { path: '**', component: NotfoundComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
