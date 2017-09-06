import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing }           from '../app/router/app.router';

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
    routing 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
