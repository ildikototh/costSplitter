import {Component, EventEmitter, Output} from "@angular/core";
import {Group} from "../../shared/models/group";

@Component({
  selector: 'group-join',
  templateUrl: './group-join.component.html',
  styleUrls: ['./group-join.component.css']
})
export class GroupJoinComponent {

  group:Group;
  @Output() userJoined = new EventEmitter();

  constructor() { }

  onJoinButtonClicked() {
    this.userJoined.emit({groupId: this.group.name});
  }

}
