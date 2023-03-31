import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './components/hero-list/hero-list.component';

const routes: Routes = [
  /* SplashScreen */
  { path: '', component: HeroListComponent },
  /* Heroes list */
  { path: 'heroes', component: HeroListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
