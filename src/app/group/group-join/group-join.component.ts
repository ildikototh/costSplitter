import {Component, Input, OnInit} from "@angular/core";
import {GroupService} from "../../shared/services/group.service";
import {Group} from "../../shared/models/group";

@Component({
  selector: 'group-join',
  templateUrl: './group-join.component.html',
  styleUrls: ['./group-join.component.css']
})
export class GroupJoinComponent implements OnInit {

  group:Group;
  @Input() groupId:string = '12345';

  constructor(private groupService:GroupService) { }

  ngOnInit() {
    this.group = this.groupService.getGroup(this.groupId);
  }

}
