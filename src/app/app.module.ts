import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ExpensesModule} from "./expenses/expenses.module";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import {NotfoundComponent} from "./notfound/notfound.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
