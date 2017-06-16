import { Injectable } from '@angular/core';
import {Expense} from '../models/expense';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@Injectable()
export class ExpenseService {
  private expensesUrl = '/product';

   constructor(public db: AngularFireDatabase) {
  }

  getExpenses(): FirebaseListObservable<any> {
    return this.db.list(this.expensesUrl);
  }

  addExpense(expense: Expense) {
    this.getExpenses().push(expense);
  }

}
