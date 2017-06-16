import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Group} from "../models/group";

@Injectable()
export class GroupService {

  constructor(private http: Http) { }

  getGroupsByUserId(userId: string) {
    let groups = [new Group('123456', 'My first group'), new Group('654321', 'Second group')];
    return groups;
  }

  getGroup(groupId: string) {
    return this.getGroupsByUserId('')[0];
  }

  createGroup(group: Group) {

  }

}
