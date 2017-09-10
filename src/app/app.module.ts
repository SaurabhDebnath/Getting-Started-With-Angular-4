import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsersModule }       from './users/users.module';
import { PostsModule }       from './posts/posts.module';
import { SharedModule }      from './shared/shared.module';

import { routing }  from './app.routing';
import { usersRouting }      from './users/users.routing';
import { postsRouting }      from './posts/posts.routing';

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
    UsersModule,
    PostsModule,
    SharedModule,
    routing,
    usersRouting,
    postsRouting    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
