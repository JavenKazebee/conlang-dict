import { Component } from '@angular/core';
import { Word } from './word';


const WORDS: Word[] = [
  { lang: "Fus", english: "Force", notes: "First word in shout.", status: "l"},
  { lang: "Ro", english: "Balance", notes: "Second word in shout.", status: "w"},
  { lang: "Dah", english: "Push", notes: "Final word in shout.", status: "u"}
]
@Component({
  selector: 'app-root',
  template: `
    <word-list [words]="words" (onSelect)="onSelect($event)"></word-list>
    <word-detail [word]="selectedWord"></word-detail>
  `
})

export class AppComponent {
  words = WORDS;
  selectedWord: Word;
  onSelect(word: Word): void {
    this.selectedWord = word;
  }
}
