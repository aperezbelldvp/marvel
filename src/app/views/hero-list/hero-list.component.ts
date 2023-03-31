import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeroModel } from 'src/app/models/hero.model';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.5s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HeroListComponent implements OnInit {
  @ViewChild('bottomOfList') bottomOfList!: ElementRef;
  protected heroes: HeroModel[] = [];
  protected loading: boolean = true;
  private offset: number = 0;
  private limit: number = 20;

  constructor(private marvelSv: MarvelApiService) {}

  ngOnInit() {
    this.getHeroes();
    window.addEventListener('scroll', this.onScroll.bind(this), true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll.bind(this), true);
  }

  getHeroes(): void {
    this.marvelSv.getHeroes(this.offset, this.limit).subscribe((response) => {
      this.heroes = response.data.results;
      this.loading = false;
    });
  }

  onScroll(): void {
    const listHeight = this.bottomOfList.nativeElement.offsetTop;
    const scrollHeight = window.pageYOffset + window.innerHeight;
    if (scrollHeight >= listHeight) {
      this.offset += this.limit;
      this.loading = true;
      this.marvelSv.getHeroes(this.offset, this.limit).subscribe((response) => {
        this.heroes = this.heroes.concat(response.data.results);
        this.loading = false;
      });
    }
  }
}
