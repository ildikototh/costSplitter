import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Expense} from '../../shared/models/expense';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  private isAssigned = false;
  @Input() expense: Expense;
  @Output() itemPrice: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  toggleAssignToMe() {
    this.isAssigned = !this.isAssigned;
    if (this.isAssigned) {
      this.itemPrice.emit(this.expense.price);
    }
  }

}
