import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Group} from "../../shared/models/group";
import {ActivatedRoute} from "@angular/router";
import {GroupService} from "../../shared/services/group.service";

@Component({
  selector: 'group-join',
  templateUrl: './group-join.component.html',
  styleUrls: ['./group-join.component.css']
})
export class GroupJoinComponent implements OnInit {

  group:Group;
  @Output() userJoined = new EventEmitter();

  constructor(private route: ActivatedRoute, private groupService:GroupService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let groupId = params['id'];
      this.groupService.find(groupId).subscribe(group => this.group = group);
    });
  }

  onJoinButtonClicked() {
    this.userJoined.emit({groupId: this.group.$key});
  }

}
