import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomePageComponent } from './gifs/pages/home/home.component';
import { GifsService } from './gifs/services/gifs.service';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HomePageComponent, HttpClientModule, IonicModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [GifsService]
})
export class AppComponent {
  title = 'gifs-app';
}
