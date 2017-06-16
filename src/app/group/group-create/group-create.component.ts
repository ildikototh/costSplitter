import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
  selector: 'group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent implements OnInit {

  public name:string;
  @Output() groupCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.groupCreated.emit({name: this.name});
  }

}
