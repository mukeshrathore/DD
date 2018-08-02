import { Component } from '@angular/core';

export interface month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Drag and Drop demo';

  months: month[] = [
    {value: 'Apr18', viewValue: 'April 18'},
    {value: 'May18', viewValue: 'May 18'},
    {value: 'Jun18', viewValue: 'June 18'}
  ];

}
