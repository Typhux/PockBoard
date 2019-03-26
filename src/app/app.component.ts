import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public configuration: any = {
    cols: 23,
    rows: 23
  };

  public data: any[] = [{
    item: {}
  },
];

}
