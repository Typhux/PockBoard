import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public configuration: any = {
    cols:3,
    rows: 3
  }

  public data: any[] = [{
    item: {}
  },
];

}
