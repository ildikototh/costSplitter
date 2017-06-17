import {Component} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import {User} from "firebase/app";
import {Router} from "@angular/router";
import {Group} from "../shared/models/group";
import {GroupService} from "../shared/services/group.service";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {

  currentUser: User;
  currentGroup: Group;

  constructor(public af: AngularFireAuth, public afDB: AngularFireDatabase, private router: Router, private groupService:GroupService) {
    this.af.authState.subscribe(auth => {
      console.log(auth)
      if (auth) {
        this.currentUser = auth;
      }
    });
  }

  logout() {
    this.af.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  createGroup(event: any) {
    this.groupService.createGroup(new Group(event.name, this.currentUser.uid, [this.currentUser.uid]));
  }

  addUserToGroup(event: any) {
    this.currentGroup.userIds[this.currentGroup.userIds.length] = this.currentUser.uid;
    this.groupService.groups.update(this.currentGroup.$key, this.currentGroup);
  }

  onGroupSelected(event: any) {
    this.groupService.find(event.groupId).subscribe(group => {
      this.currentGroup = group;
    });
  }

}
