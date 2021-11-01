import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArcheLightModule } from '@braintrust-dev/arche-light';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArcheLightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
