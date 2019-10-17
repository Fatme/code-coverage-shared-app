import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  public title = 'tnsTitle';

  public testMethod1(x: number) {
    if (x === 3) {
      return 3;
    }

    return 10;
  }
}
