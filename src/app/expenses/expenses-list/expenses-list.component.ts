import {Component, Input, OnInit} from "@angular/core";
import {Expense} from "../../shared/model/expense";

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  @Input() expenses: Expense[];

  constructor() { }

  ngOnInit() {
  }

}
