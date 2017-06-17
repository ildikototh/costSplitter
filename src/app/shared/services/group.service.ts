import {Injectable} from "@angular/core";
import {Group} from "../models/group";
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";

@Injectable()
export class GroupService {

  group: FirebaseObjectObservable<any>;
  groups: FirebaseListObservable<any>;

  constructor(private database: AngularFireDatabase) {
    this.groups = this.database.list('/groups');
  }

  createGroup(group: Group) {
    if (group == null) return;
    this.groups.push(group);
  }

  find(groupId:string) {
    this.group = this.database.object('/groups/' + groupId);
    return this.group;
  }

  addUserToGroup(userId:string, groupId:string) {
    this.group = this.find(groupId);

    this.group.subscribe(group => {
      let userIds = group.userIds;
      userIds.push(userId);
      this.group.update({
        userIds: userIds
      });
    });
  }

}
