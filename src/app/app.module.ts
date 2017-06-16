import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {GroupService} from "./shared/services/group.service";
import {GroupModule} from "./group/group.module";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GroupModule
  ],
  providers: [
    GroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
