import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";

import {firebaseConfig} from "../environments/environment";
import {LoginComponent} from "./login/login.component";
import {EmailComponent} from "./email/email.component";
import {SignupComponent} from "./signup/signup.component";
import {MemberComponent} from "./member/member.component";
import {routes} from "./app.route";
import {AppComponent} from "./app.component";
import {GroupService} from "./shared/services/group.service";
import {GroupModule} from "./group/group.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GroupModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    routes
  ],
  providers: [
    GroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
