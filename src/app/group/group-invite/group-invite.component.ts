import {Component, Input, OnInit} from "@angular/core";
import {Group} from "../../shared/models/group";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'group-invite',
  templateUrl: './group-invite.component.html',
  styleUrls: ['./group-invite.component.css']
})
export class GroupInviteComponent implements OnInit {

  @Input() group: Group;

  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = '';
  baseUri : string = '';

  constructor() {

  }

  ngOnInit(): void {
    this.baseUri = environment.appBaseUri + '/groups/';
  }

}
