import { Injectable } from '@angular/core';

interface Word {
  english: string;
  norwegian: string;
}

@Injectable({
  providedIn: 'root',
})
export class WordService {
  private words: Word[] = [];

  getWords(): Word[] {
    return this.words;
  }

  addWord(english: string, norwegian: string): void {
    this.words.push({ english, norwegian });
  }
}
