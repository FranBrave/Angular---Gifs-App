import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [CommonModule, IonicModule],
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor( private gifsService: GifsService ) { }

  get tags( ) {
    return this.gifsService.tagsHistory;
  }

  searchTag( tag: string ) {
    this.gifsService.searchTag( tag );
  }
}
