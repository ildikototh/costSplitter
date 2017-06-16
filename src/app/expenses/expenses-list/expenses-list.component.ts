import {Component, Input, OnInit, Output} from "@angular/core";
import {Expense} from "../../shared/models/expense";

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  public totalPayable = 0;
  private selectedItem = { 'price': 0 };

  @Input() expenses: Expense[];
  @Input() itemPrice: number;
  constructor() { }

  ngOnInit() {
  }

  itemSelected(price) {
    this.itemPrice = price;
    this.calculateTotal();
  }

  calculateTotal() {
    this.selectedItem.price = this.itemPrice;
    this.totalPayable  += this.selectedItem.price;
  }

}
