import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './views/hero-detail/hero-detail.component';
import { HeroListComponent } from './views/hero-list/hero-list.component';
import { HeroSearchComponent } from './views/hero-search/hero-search.component';
import { SplashscreenComponent } from './views/splashscreen/splashscreen.component';


const routes: Routes = [
  /* SplashScreen */
  { path: '', component: SplashscreenComponent},
  /* Heroes list */
  { path: 'heroes', component: HeroListComponent },
  /* Hero details */
  { path: 'hero/:id', component: HeroDetailComponent },
  /* Hero search */
  { path: 'heroes/search/:searchQuery', component: HeroSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
