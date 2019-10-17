import { Component } from '@angular/core';
import * as store from '@src/app/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'w11';
  constructor() {
    console.log(store.logTest());
  }
}
