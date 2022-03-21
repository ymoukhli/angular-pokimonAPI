import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokimonCardComponent } from './pokimon-card/pokimon-card.component';
import { PokimonDetailsComponent } from './pokimon-details/pokimon-details.component';
import { AppRoutingModule } from './app-routing.module';
import { PokimonsComponent } from './pokimons/pokimons.component';
@NgModule({
  declarations: [
    AppComponent,
    PokimonCardComponent,
    PokimonDetailsComponent,
    PokimonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
