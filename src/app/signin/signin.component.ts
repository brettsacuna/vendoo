import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  login_form : FormGroup;
  message : boolean;
  message_color : string;
  message_text : string;

  constructor(private af : AngularFire, private router : Router, private fb : FormBuilder) {
    this.login_form = this.fb.group({
      'username' : [null, Validators.compose([Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}')])],
      'password': [null, Validators.required],
    });
  }

  login(value : any) {
    this.message = true;
    this.message_text = "Validating user";
    this.message_color = "blue";

    setTimeout(() => {
      this.af.auth.login({ email: value.username, password: value.password },{ provider: AuthProviders.Password, method: AuthMethods.Password }).then((data) => {
        this.message_color = "green";
        this.message_text = "Login successfull redirecting...";
      }).catch((error) => {
        this.message_color = "red";
        this.message_text = error.message;
      });
    }, 1000);
  }

  ngOnInit() {
  }

}
