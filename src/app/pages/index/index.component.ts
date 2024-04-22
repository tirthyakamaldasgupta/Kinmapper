import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  kinMaps: {id: number, name: string}[] = [];
  kinMapNonExistenceMessage = 'It seems no kinmaps exist yet. Care to pioneer the creation by adding some kinmaps?';
}
