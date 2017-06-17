import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  currentUser: any;


  constructor(public af: AngularFireAuth, public afDB: AngularFireDatabase, private router: Router) {

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

  ngOnInit() {
  }

}
