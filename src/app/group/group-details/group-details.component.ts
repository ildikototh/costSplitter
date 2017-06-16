import {Component, Input, OnInit} from "@angular/core";
import {Group} from "../../shared/models/group";

@Component({
  selector: 'group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  @Input() group: Group;

  constructor() { }

  ngOnInit() {
  }

}
