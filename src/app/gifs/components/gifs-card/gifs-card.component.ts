import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CommonModule } from '@angular/common';
import { LazyImageComponent } from '../../../shared/components/lazy-image/lazy-image.component';

@Component({
  selector: 'gifs-card',
  standalone: true,
  imports: [CommonModule, LazyImageComponent],
  templateUrl: './gifs-card.component.html'
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gif!: Gif;


  ngOnInit(): void {
    if ( !this.gif ) throw new Error('Gif property is required');
  }

}
