import {Injectable} from '@angular/core';
import {Expense} from '../models/expense';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@Injectable()
export class ExpenseService {
  private expensesUrl = '/product';
  private expenseRef;

  constructor(public db: AngularFireDatabase) {
    this.getAllExpenses();
  }

  getAllExpenses(): FirebaseListObservable<any> {
    return this.expenseRef = this.db.list(this.expensesUrl);
  }

  getExpensesByUser(email) {
    return this.expenseRef.map(expenses => expenses.filter(expense => expense.email === email));
  }

  getExpensesByGroup(group) {
    return this.expenseRef.map(expenses => expenses.filter(expense => expense.group === group));
  }

  addExpense(expense: Expense) {
    this.expenseRef.push(expense);
  }

}
