import {Component, OnInit, Input} from '@angular/core';
import {Expenses} from "../../shared/model/expenses";


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  @Input() expense: Expenses;

  constructor() {
  }

  ngOnInit() {
  }

}
