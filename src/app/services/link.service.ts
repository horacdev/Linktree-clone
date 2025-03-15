import { Injectable } from '@angular/core';
import { Link } from '../models/link.model'

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private links: Link[] = [
    { title: 'GitHub', url: 'https://github.com', icon: 'fab fa-github' },
    { title: 'LinkedIn', url: 'https://linkedin.com', icon: 'fab fa-linkedin' },
    
  ];
  getLinks(): Link[] {
    return this.links;
  }
}
