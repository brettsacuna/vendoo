import * as firebase from 'firebase';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  reset_form : FormGroup;
  message : boolean;
  message_color : string;
  message_text : string;

  constructor(private fb : FormBuilder, private router : Router) {
    this.reset_form = this.fb.group({
      'username' : [null, Validators.compose([Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}')])],
    });
  }

  reset(value : any) {
    this.message = true;
    this.message_text = "Sending e-mail";
    this.message_color = "blue";

    let global = this;

    let auth = firebase.auth();

    setTimeout(() => {
      auth.sendPasswordResetEmail(value.username).then(function(data) {
        global.message_color = "green";
        global.message_text = "We successfully sent a reset password link to your email";

        setTimeout(() => {
          global.router.navigate(['login']);
        }, 5000);
      }, function(error) {
        global.message_color = "red";
        global.message_text = error.message;
      });
    }, 10000);
  }

  ngOnInit() {
  }

}
