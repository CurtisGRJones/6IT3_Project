import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from '@app/home'
import { RegistrationSubmittedComponent } from '@app/registeration-submitted';
import { LoginMenuComponent } from '@app/top-corner-menu/login-menu';
import { Err500Component } from '@app/err500'
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "@app/login";
import {RegisterComponent} from "@app/register";
import { ServerlistComponent } from '@app/serverlist';
import { AdminComponent } from '@app/admin';
import { WelcomeMenuComponent } from '@app/top-corner-menu/welcome-menu';
import { LogoutComponent } from '@app/logout';
import { TopCornerMenuComponent } from './top-corner-menu/top-corner-menu.component';
import { GamesTableComponent } from './gamestable/games-table.component';
import { ServersComponent } from './servers/servers.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { GamesComponent } from './games/games.component';
import { Err404Component } from './err404/err404.component';

@NgModule( {
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegistrationSubmittedComponent,
    LoginMenuComponent,
    Err500Component,
    ServerlistComponent,
    AdminComponent,
    WelcomeMenuComponent,
    LogoutComponent,
    TopCornerMenuComponent,
    GamesTableComponent,
    ServersComponent,
    LeftMenuComponent,
    GamesComponent,
    Err404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
} )
export class AppModule { }
