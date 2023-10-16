import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TextboxComponent } from './textbox/textbox.component';
import { AboutComponent } from './about/about.component';

import { MypipePipe } from './home/mypipe.pipe';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    TextboxComponent,
    AboutComponent,
    MypipePipe,
    PagenotfoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
