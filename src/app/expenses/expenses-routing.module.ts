import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExpensesComponent} from "./expenses.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', component: ExpensesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule {
}
