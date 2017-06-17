import {Component, Input, OnInit} from "@angular/core";
import {Expense} from "../../shared/models/expense";

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  public totalPayable = 0;
  private itemForPay = new Expense('', 0);
  // private itemsForPay = Expense[];

  @Input() expenses: Expense[];
  @Input() itemPrice: number;

  constructor() { }

  ngOnInit() {
  }

  itemSelected(price) {

    this.calculateTotal(price);
  }

  calculateTotal(price) {
    this.totalPayable  = Math.round((this.totalPayable  += price)  * 100) / 100;
  }

  paySelected() {

  }

}
