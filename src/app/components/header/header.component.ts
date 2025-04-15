import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  profile = {
    name: 'Horácio Paganini',
    bio: 'Olá, estou aprendendo a programar 😁\n Esses são os meus links:',
    avatar: 'https://avatars.githubusercontent.com/u/201837471?s=200&v=4'
  };
}
