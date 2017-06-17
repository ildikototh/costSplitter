import {Component, OnInit} from "@angular/core";
import {GroupService} from "../../shared/services/group.service";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-group-join-container',
  templateUrl: './group-join-container.component.html',
  styleUrls: ['./group-join-container.component.css']
})
export class GroupJoinContainerComponent implements OnInit {

  currentUser:any;

  constructor(private groupService:GroupService, public af: AngularFireAuth) {
    this.af.authState.subscribe(auth => {
      console.log(auth)
      if (auth) {
        this.currentUser = auth;
      }
    });
  }

  ngOnInit() {
  }

  addUserToGroup(event: any) {
    this.groupService.addUserToGroup(this.currentUser.uid, event.groupId);
  }

}
