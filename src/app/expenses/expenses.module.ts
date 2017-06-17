import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ExpensesRoutingModule} from "./expenses-routing.module";
import {ExpensesComponent} from "./expenses.component";
import {ExpensesListComponent} from "./expenses-list/expenses-list.component";
import {ExpensesFormComponent} from "./expenses-form/expenses-form.component";
import {ExpenseComponent} from "./expense/expense.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    FormsModule
  ],
  declarations: [ExpensesComponent, ExpensesListComponent, ExpensesFormComponent, ExpenseComponent],
  exports: [ExpensesComponent, ExpensesListComponent, ExpensesFormComponent, ExpenseComponent],
})
export class ExpensesModule {
}
