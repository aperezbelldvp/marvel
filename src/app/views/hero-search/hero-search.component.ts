import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroModel } from 'src/app/models/hero.model';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.5s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HeroSearchComponent implements OnInit {
  private searchQuery: string = '';
  protected heroes: HeroModel[] = [];
  protected loading: boolean = true;

  constructor(
    private marvelService: MarvelApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /* Get the hero's name from params */
    this.route.params.subscribe((params) => {
      this.searchQuery = params['searchQuery'];
      this.searchHeroes();
    });
  }

  searchHeroes(): void {
    this.marvelService
      .getHeroesByName(this.searchQuery)
      .subscribe((response) => {
        this.heroes = response.data.results;
        this.loading = false;
      });
  }
}
