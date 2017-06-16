import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";


const routes: Routes = [
  { path: '', redirectTo :'home',  pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  // { path: 'expenses', component: ExpensesComponent },
  { path: 'expenses', loadChildren: './expenses/expenses.module.ts#ExpensesModule' },
  { path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
