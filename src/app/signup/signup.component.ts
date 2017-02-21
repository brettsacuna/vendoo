import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  register_form : FormGroup;
  message : boolean;
  message_color : string;
  message_text : string;

  constructor(private af : AngularFire, private router : Router, private fb : FormBuilder) {
    this.register_form = this.fb.group({
      'fullname' : [null, Validators.required],
      'username' : [null, Validators.required],
      'password': [null, Validators.required],
    });
  }

  register(value : any) {
    this.message = true;
    this.message_text = "Registring user";
    this.message_color = "blue";

    setTimeout(() => {
      this.af.auth.createUser({email : value.username, password : value.password}).then((data) => {
        this.message_color = "green";
        this.message_text = "Register successfull redirecting...";
      }).catch((error) => {
        this.message_color = "red";
        this.message_text = error.message;
      });
    }, 1000);
  }

  loginFacebook() {
    this.message = true;
    this.message_text = "Waiting for user";
    this.message_color = "blue";

    setTimeout(() => {
      this.af.auth.login({
        provider: AuthProviders.Facebook,
        method: AuthMethods.Popup,
      }).then((data) => {
        this.message_color = "green";
        this.message_text = "Was successfully registered redirecting...";
      }).catch((error) => {
        this.message_color = "red";
        this.message_text = error.message;
      });
    }, 1000);
  }

  ngOnInit() {
  }

}
