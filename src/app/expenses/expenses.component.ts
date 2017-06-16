import {Component, OnInit} from '@angular/core';
import {Expense} from '../shared/models/expense'

import {ExpenseService} from '../shared/services/expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  public expenses: any;

  expense: Expense = new Expense('', 0, '', '');

  constructor(private expenseService: ExpenseService,) {
  }

  ngOnInit() {
    this.expenseService.getExpenses().subscribe(expenses => {
      this.expenses = expenses
    })
  }

  getExpensesByGroup(group) {
    this.expenseService.getExpenses().subscribe(expenses => expenses.indexOf(group) !== -1);
  }

  getExpensesByName(product) {
    this.expenseService.getExpenses().subscribe(expenses => expenses.indexOf(product) !== -1);
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
