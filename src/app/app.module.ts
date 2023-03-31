import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroDetailComponent } from './views/hero-detail/hero-detail.component';
import { HeroListComponent } from './views/hero-list/hero-list.component';
import { HeroSearchComponent } from './views/hero-search/hero-search.component';
import { SplashscreenComponent } from './views/splashscreen/splashscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroCardComponent,
    HeroDetailComponent,
    HeroListComponent,
    HeroSearchComponent,
    SplashscreenComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
