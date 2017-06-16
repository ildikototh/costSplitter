import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GroupOverviewComponent} from "./group-overview/group-overview.component";
import {GroupDetailsComponent} from "./group-details/group-details.component";
import {GroupInviteComponent} from "./group-invite/group-invite.component";
import {NgxQRCodeComponent} from "ngx-qrcode2";
import {GroupJoinComponent} from "./group-join/group-join.component";
import {GroupCreateComponent} from "./group-create/group-create.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    GroupOverviewComponent,
    GroupDetailsComponent,
    GroupOverviewComponent,
    GroupInviteComponent,
    GroupJoinComponent,
    NgxQRCodeComponent,
    GroupCreateComponent,
  ],
  exports: [
    GroupOverviewComponent,
    GroupDetailsComponent,
    GroupInviteComponent,
    GroupJoinComponent,
    GroupCreateComponent,
    NgxQRCodeComponent
  ]
})
export class GroupModule { }
