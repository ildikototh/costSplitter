import {Component, OnInit} from '@angular/core';
import {Expense} from '../shared/model/expense'

import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  public expenses: any;
  expense: Expense = new Expense('Random', 5.4);

  constructor(public af: AngularFireAuth, public afDB: AngularFireDatabase, private router: Router) {

    this.af.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/expenses');
      }
    });
  }

  ngOnInit() {
    this.expenses = this.afDB.list('/product');
  }

  getExpensesByGroup(group_id) {
  }

  getExpensesByName(name) {
    this.expenses.subscribe(expenses => expenses.indexOf(name) !== -1);
  }

}
