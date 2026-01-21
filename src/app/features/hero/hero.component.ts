import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
