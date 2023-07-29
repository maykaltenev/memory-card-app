import { Component } from '@angular/core';
import { WordService } from '../word.service';

interface Word {
  english: string;
  norwegian: string;
}

@Component({
  selector: 'app-word-table',
  templateUrl: './word-table.component.html',
  styleUrls: ['./word-table.component.css'],
})
export class WordTableComponent {
  words: Word[] = [];
  newEnglishWord: string = '';
  newNorwegianWord: string = '';

  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.words = this.wordService.getWords();
  }

  addNewWord() {
    if (this.newEnglishWord && this.newNorwegianWord) {
      this.wordService.addWord(this.newEnglishWord, this.newNorwegianWord);
      // Clear the input fields after adding the word pair
      this.newEnglishWord = '';
      this.newNorwegianWord = '';
    }
  }
}
