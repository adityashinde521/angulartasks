import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn: boolean = false;
  title: any;

  // Add a method to set the loggedIn flag
  setLoggedIn(status: boolean) {
    this.loggedIn = status;

}
} 