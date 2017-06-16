import {Component, OnInit} from "@angular/core";
import {Expense} from "../shared/model/expense";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  public expenses: any;
  expense: Expense = new Expense('Random', 5.4);
  constructor() { }

  ngOnInit() {
      this.expenses = [{'product_name':'Coffee', 'price': 1.1, 'group_id': 1, 'user_id': 2}];
  }
  getExpensesByGroup(group_id) {
    return this.expenses.filter(expense => expense.group_id = group_id);
  }

  getExpensesByName(name) {
    return this.expenses.filter(expense => expense.product_name = name );
  }

  }
