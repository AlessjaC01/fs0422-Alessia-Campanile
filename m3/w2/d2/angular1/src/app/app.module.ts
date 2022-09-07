import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PostAttiviComponent } from './pages/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './pages/post-inattivi/post-inattivi.component';
import { ButtonComponent } from './main/button/button.component';
import { HeaderComponent } from './main/header/header.component';
import { FormsComponent } from './main/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    ButtonComponent,
    HeaderComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
