import {Injectable} from "@angular/core";
import {Group} from "../models/group";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Injectable()
export class GroupService {

  groups: FirebaseListObservable<any>;

  constructor(private database: AngularFireDatabase) {
    this.groups = this.database.list('/groups');
  }

  createGroup(group: Group) {
    if (group == null) return;
    this.groups.push(group);
  }

  find(groupId:string) {
    return this.database.object('/groups/' + groupId);
  }

}
