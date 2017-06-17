import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  state: '';
  error: any;
  constructor(public af: AngularFireAuth, public afDB: AngularFireDatabase, private router: Router) {
    this.af.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  ngOnInit(): void {
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.signInWithEmailAndPassword(
          formData.value.email,
          formData.value.password
        ).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/members']);
        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }

}
