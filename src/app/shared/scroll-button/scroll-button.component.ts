import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
})
export class ScrollButtonComponent {
  protected showButton: boolean = false;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 500) {
      this.showButton = true;
    } else if (this.showButton && window.pageYOffset <= 500) {
      this.showButton = false;
    }
  }
}
