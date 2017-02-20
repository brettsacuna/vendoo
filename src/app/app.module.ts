import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouting } from './configuration/app.routing';
import { AppFirebase } from './configuration/app.firebase';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    NotfoundComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouting,
    AppFirebase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
