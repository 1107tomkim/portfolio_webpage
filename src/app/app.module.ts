import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContentsComponent } from './component/contents/contents.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ContactMeComponent } from './component/contact-me/contact-me.component';
import { LinkedinComponent } from './component/linkedin/linkedin.component';
import { GithubComponent } from './component/github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    NavbarComponent,
    ContentsComponent,
    ContactMeComponent,
    LinkedinComponent,
    GithubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
