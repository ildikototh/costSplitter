import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-expenses-form',
  templateUrl: './expenses-form.component.html',
  styleUrls: ['./expenses-form.component.css']
})
export class ExpensesFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(name: string) {
    this.formSubmitted.emit({name});
  }

}
