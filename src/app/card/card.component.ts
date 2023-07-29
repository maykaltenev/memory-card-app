// card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() englishWord: string | undefined;
  @Input() norwegianWord: string | undefined;

  flipped = false;

  onCardClick() {
    this.flipped = !this.flipped;
  }
}
