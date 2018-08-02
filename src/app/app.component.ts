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
  title = 'Angular Material Design';

  months: month[] = [
    {value: 'Apr18', viewValue: 'April 18'},
    {value: 'May18', viewValue: 'May 18'},
    {value: 'Jun18', viewValue: 'June 18'}
  ];

 val = 500;
  isDropAllowed = (dragData: any) => {
    return dragData > this.val;
  }
  // drop(ev) {
  //   ev.preventDefault();
  //   var data = ev.dataTransfer.getData("text");
  //   ev.target.appendChild(document.getElementById(data));
  // }

  // allowDrop(ev) {
  //   ev.preventDefault();
  // }

  // drag(ev) {
  //   ev.dataTransfer.setData("text", ev.target.id);
  // }
}
