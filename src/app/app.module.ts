import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsersModule }       from './users/users.module';

import { routing }  from './app.routing';
import { usersRouting }      from './users/users.routing';

import { NavBarComponent }   from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    usersRouting,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
