import {Component, Input, OnInit} from "@angular/core";
import {Group} from "../../shared/models/group";

@Component({
  selector: 'group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.css']
})
export class GroupOverviewComponent implements OnInit {

  @Input() groups: Group[];

  constructor() { }

  ngOnInit() {

  }

}
