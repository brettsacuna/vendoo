import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  is_logged_in : boolean;
  user : any;

  constructor(private af : AngularFire, private router : Router) {
    let user_exists = localStorage.getItem('user');

    if (user_exists) {
      this.is_logged_in = true;
      this.router.navigate(['panel']);
    } else {
      this.af.auth.subscribe(user => {
        if (user == null) {
          this.router.navigate(['']);
          this.is_logged_in = false;

          localStorage.removeItem('user');
        } else {
          setTimeout(() => {
            this.is_logged_in = true;
            this.router.navigate(['panel']);

            localStorage.setItem('user', JSON.stringify(user.auth));
          }, 1500);
        }
      });
    }
  }
}
