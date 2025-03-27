import { Injectable } from '@angular/core';
import { Link } from '../models/link.model'

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private links: Link[] = [
    { title: 'GitHub', url: 'https://github.com/horacdev', icon: 'fab fa-github' },
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/hor%C3%A1cio-paganini-8149b7328', icon: 'fab fa-linkedin' },
    {title: 'Meu Currículo', url: 'assets/docs/curriculo.pdf', icon: 'fas fa-file-pdf'}
  ];
  getLinks(): Link[] {
    return this.links;
  }
}
