import { Component, Input } from '@angular/core';
import { HeroModel } from '../../models/hero.model';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent {

  @Input() hero!: HeroModel;

}
