// card-deck.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.css'],
})
export class CardDeckComponent {
  cards: { english: string; norwegian: string; flipped: boolean }[] = [
    { english: 'Apple', norwegian: 'Eple', flipped: false },
    { english: 'Banana', norwegian: 'Banan', flipped: false },
    { english: 'Orange', norwegian: 'Appelsin', flipped: false },
    // Add more cards here with flipped: false
  ];

  newEnglishWord: string = '';
  newNorwegianWord: string = '';

  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addNewWord() {
    if (this.newEnglishWord && this.newNorwegianWord) {
      this.cards.push({
        english: this.newEnglishWord,
        norwegian: this.newNorwegianWord,
        flipped: false,
      });

      // Clear the input fields after adding the word pair
      this.newEnglishWord = '';
      this.newNorwegianWord = '';
    }
  }
}
