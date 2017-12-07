import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Word } from './word';

@Component({
  selector: 'word-detail',
  template: `
  <div *ngIf="word" class="details">
    <div style="text-align: center; font-size: 2em;">{{word.lang}}</div>
    <div>{{word.english}}</div>
    <div>Notes: {{word.notes}}</div>
    <div>
      <div class="statusButton learned">Learned</div>
      <div class="statusButton learning">Learning</div>
      <div class="statusButton unlearned">Unlearned</div>
    </div>
  </div>
  `,
  styles: [`
    .details {
      display: inline-block;
      margin-left: 2em;
      width: 20em;
      font-size: 2em;
    }
    .statusButton {
      display: inline-block;
      padding: 0.3em;
      margin: 0.2em;
      text-align: center;
      width: 10em;
      font-size: 0.5em;
      border-radius: 4px;
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
})
export class WordDetailComponent {
  @Input() word: Word;
  @Output() onSetStatus = new EventEmitter();
}
