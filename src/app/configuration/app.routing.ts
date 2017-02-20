import { RouterModule } from '@angular/router';
import { PanelComponent } from '../panel/panel.component';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { NotfoundComponent } from '../notfound/notfound.component';

const routes = [
  { path : '', redirectTo: 'register', pathMatch: 'full' },
  { path : 'login', component : SigninComponent },
  { path : 'register', component : SignupComponent },
  { path : 'panel', component : PanelComponent },
  { path: '**', component: NotfoundComponent }
];

export const AppRouting = RouterModule.forRoot(routes, { 
  useHash: false
});