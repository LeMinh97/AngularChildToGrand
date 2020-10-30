import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadComponent } from './dad/dad.component';
import { ChildComponent } from './child/child.component';
import { GrandComponent } from './grand/grand.component';

@NgModule({
  declarations: [
    AppComponent,
    DadComponent,
    ChildComponent,
    GrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
