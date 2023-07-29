import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { WordTableComponent } from './word-table/word-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardDeckComponent,
    WordTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
