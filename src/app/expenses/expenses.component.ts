import {Component, OnInit} from "@angular/core";
import {Expense} from "../shared/models/expense";

import {ExpenseService} from "../shared/services/expense.service";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  public expenses: any;
  public email: string;

  expense: Expense = new Expense('', 0, '', '');


  constructor(private expenseService: ExpenseService,) {
  }

  ngOnInit() {
    this.getAllExpenses();
  }

  getAllExpenses() {
    this.expenseService.getAllExpenses().subscribe(expenses => {
      this.expenses = expenses
    });
  }

  getExpensesByGroup(group) {
    this.expenseService.getExpensesByGroup(group).subscribe(expenses => {
      this.expenses = expenses
    });
  }

  getExpensesByEmail(email) {
    this.expenseService.getExpensesByUser(email).subscribe(expenses => {
      this.expenses = expenses
    });
  }

  getExpensesByProductName(product) {
    this.expenses.filter(expense => expense.product.toLowerCase() === product.toLowerCase());
  }

  addExpense() {
    if (this.expense.product === '') {
      return;
    }
    this.expenseService.addExpense(this.expense);
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.expense.product = '';
    this.expense.price = 0;
  }
}
