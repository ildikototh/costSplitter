import {Component, OnInit} from "@angular/core";
import {Group} from "./shared/models/group";
import {GroupService} from "./shared/services/group.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  groups: Group[];
  group: Group;

  constructor(private groupService:GroupService) {

  }

  ngOnInit(): void {
    this.groups = this.groupService.getGroupsByUserId('12345');
    this.group = this.groups[0];
  }

  createGroup(event: any) {
    this.groups.push(new Group('sdlkfj', event.name));
  }

}
