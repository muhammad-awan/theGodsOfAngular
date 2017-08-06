import { Component } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'The Mighty Gods of Olympus';
  selectedHero: Hero;
  heroes = HEROES;
  onSelectaroo(hero: Hero): void {
    this.selectedHero = hero;
  }
}

const HEROES: Hero[] = [
  { id: 11, name: 'Hades' },
  { id: 12, name: 'Kratos' },
  { id: 13, name: 'Ares' },
  { id: 14, name: 'Helios' },
  { id: 15, name: 'Athena' },
  { id: 16, name: 'Aphrodite' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

