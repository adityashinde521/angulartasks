import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
})
export class TextboxComponent {
  @Input() pageName: string = '';
  backgroundColorClass: string = '';

  constructor(private router: Router) {
    this.determineBackgroundColorClass();
  }
  determineBackgroundColorClass() {
   // this.backgroundColorClass = this.pageName === 'Home' ? 'home-bg' : 'contact-bg';

    const currentRoute = this.router.url;

  // Check the current route and set the background color class accordingly
  if (currentRoute === '/home') {
    this.backgroundColorClass = 'home-bg';
  } else if (currentRoute === '/contact') {
    this.backgroundColorClass = 'contact-bg';
  } else if (currentRoute === '/about') {
    this.backgroundColorClass = 'about-bg';
  } else {
    // Set a default background color class if none of the above routes match
    this.backgroundColorClass = 'default-bg';
  }
  }
}