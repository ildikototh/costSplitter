import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Expense} from '../../shared/models/expense';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  public isAssigned = false;
  public selectedItems= [];
  @Input() expense: Expense;
  @Output() itemPrice: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  toggleAssignToMe() {
    this.isAssigned = !this.isAssigned;

    if (this.isAssigned) {
      this.selectedItems.push(this.expense);
      this.itemPrice.emit(this.expense.price);
      console.log(this.selectedItems);
    } else {
      this.removeFromList();
      this.itemPrice.emit(-Math.abs(this.expense.price));
    }
  }

  removeFromList() {
  const index = this.selectedItems.indexOf(this.expense);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    }
    console.log(this.selectedItems);
}



}
