import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {GroupService} from "../../shared/services/group.service";
import {User} from "firebase/app";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.css']
})
export class GroupOverviewComponent implements OnInit {

  @Input() currentUser:User;
  @Output() groupSelected = new EventEmitter();
  groups: Observable<any>;

  constructor(private groupService:GroupService) { }

  ngOnInit() {
    this.groups = this.groupService.groups.map(groups => groups.filter(group => group.userIds.indexOf(this.currentUser.uid) > -1));
  }

  showDetails(groupId:string) {
    this.groupSelected.emit({groupId: groupId});
  }

}
