import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  onSearch(): void {
    /* Get the input from the searchbox */
    const searchInput = document.getElementById('search') as HTMLInputElement;
    /* Remove any leading or trailing whitespace from the input */
    const searchQuery = searchInput.value.trim();
    /* Route to the results screen */
    if (searchQuery !== '') {
      this.router.navigate(['/heroes/search', searchQuery]);
    }
  }

}
