import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResultsComponent } from './results/results.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ResultsComponent,
    WatchlistComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
