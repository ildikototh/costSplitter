export class Expense {
  constructor(public product_name: string, public price: number, public user_id?: number, public group_id?: number ) {
  }
}
