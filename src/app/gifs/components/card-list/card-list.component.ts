import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsCardComponent } from '../gifs-card/gifs-card.component';

@Component({
  selector: 'card-list',
  standalone: true,
  imports: [CommonModule, GifsCardComponent],
  templateUrl: './card-list.component.html'
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];

}
