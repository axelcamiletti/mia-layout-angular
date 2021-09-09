import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** MIA Libraries */
import { MiaLayoutModule } from 'projects/agencycoda/mia-layout/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MiaLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
