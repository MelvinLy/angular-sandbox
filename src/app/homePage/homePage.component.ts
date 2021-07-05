import { Component } from '@angular/core';
import { LiveDateComponent } from './../livedate.component';

@Component({
  selector: 'homePage-component',
  templateUrl: './homePage.component.html',
  styleUrls: ['./../app.component.css']
})
export class HomePageComponent {
  title = 'angular-sandbox';
}
