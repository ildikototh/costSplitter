import {Component, OnInit, Input} from '@angular/core';
import {Expense} from "../../shared/model/expense";


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  private isAssigned : boolean = false;
  @Input() expense: Expense;

  constructor() {
  }

  ngOnInit() {
  }

  toggleAssignToMe() {
    this.isAssigned = !this.isAssigned;
    if (this.isAssigned) {

    }
  }

}
