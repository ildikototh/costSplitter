import {Component} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error: any;


  constructor(public af: AngularFireAuth, public afDB: AngularFireDatabase, private router: Router) {

    this.af.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  loginGithub() {
    this.af.auth.signInWithPopup(new firebase.auth.GithubAuthProvider).then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }

}
