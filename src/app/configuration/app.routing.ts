import { RouterModule } from '@angular/router';
import { PanelComponent } from '../panel/panel.component';
import { LoginComponent } from '../login/login.component';
import { NotfoundComponent } from '../notfound/notfound.component';

const routes = [
  { path : '', redirectTo: 'login', pathMatch: 'full' },
  { path : 'login', component : LoginComponent },
  { path : 'panel', component : PanelComponent },
  { path: '**', component: NotfoundComponent }
];

export const AppRouting = RouterModule.forRoot(routes, { 
  useHash: false
});