import { Component } from '@angular/core';
import { LinkService } from './services/link.service';
import { Link } from './models/link.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LinkCardComponent } from './components/link-card/link-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent, 
    LinkCardComponent], // Adicione aqui],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links: Link[] = [];

  constructor(private linkService: LinkService) {
    this.links = this.linkService.getLinks();
  }
}
