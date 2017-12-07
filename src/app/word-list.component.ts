import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Word } from './word';
import { AppComponent } from './app.component';

@Component({
  selector: 'word-list',
  styles: [`
    .wordList {
      list-style-type: none;
      width: 15em;
      display: inline-block;
    }
    .wordList li {
      cursor: pointer;
      padding: .3em;
      margin-top: .5em;
      height: 1.5em;
      border-radius: 4px;
      text-align: center;
    }
    .selected {
      color: white;
    }
    .learned {
      background-color: lightgreen;
    }
    .learning {
      background-color: lightblue;
    }
    .unlearned {
      background-color: gray;
    }
  `],
  template: `
    <ul class="wordList">
      <li *ngFor="let word of words" (click)="select(word)" [class.selected]="word === selectedWord" [class.learned]="word.status == 'l'" [class.learning]="word.status == 'w'" [class.unlearned]="word.status == 'u'">
        {{word.lang}} - {{word.english}}
      </li>
    </ul>
  `
})
export class WordListComponent {
  @Input() words: Word[];
  @Output() onSelect = new EventEmitter<Word>();
  selectedWord: Word;
  select(word: Word){
    this.onSelect.emit(word);
    this.selectedWord = word;
  }
}
