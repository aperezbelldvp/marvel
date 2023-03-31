import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.css'],
})
export class SplashscreenComponent {
  constructor(private router: Router) {}

  /* Navigate to the list of heroes once the gif has been played */
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/heroes']);
    }, 4000);
  }
}
