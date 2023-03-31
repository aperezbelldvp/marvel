import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroModel } from 'src/app/models/hero.model';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HeroDetailComponent implements OnInit {
  protected hero!: HeroModel;
  protected loading: boolean = false;
  protected color: string = 'white';

  constructor(
    private activeRoute: ActivatedRoute,
    private marvelSv: MarvelApiService
  ) {
    /* Interval for colour change */
    setInterval(() => {
      this.color = this.getRandomColor();
    }, 1000);
  }

  /*  Method for changing the colour of the hero's name  */
  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    this.loading = true;
    /* We get the hero id through the params of the route */
    this.activeRoute.params
      .pipe(switchMap(({ id }) => this.marvelSv.getHeroById(id)))
      .subscribe((res) => {
        if (res.data.results.length > 0) {
          this.hero = res.data.results[0];
        }
        this.loading = false;
      });
  }
}
