import { Component, Input } from '@angular/core';
import { Link } from '../../models/link.model';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrl: './link-card.component.css',
  standalone: true
})
export class LinkCardComponent {
  @Input() link!: Link;
}
