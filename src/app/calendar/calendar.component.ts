import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  date = new Date();
  month = this.date.getMonth();
  fullMonth: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July ', 'August', 'September', 'October', 'November', 'December'];
  displayedMonth: string = '';
  year = this.date.getFullYear();
  firstDay = (new Date(this.year, this.month)).getDay();
  firstOfTheCurrentMonth: Date;
  firstOfNextMonth: Date;
 
  constructor() { }

  ngOnInit(): void {
    this.getTheFirstOfNextMonth();
    this.getTheFirstOfTheCurrentMonth()
    this.displayMonth();
  }

  displayMonth () {
   return this.displayedMonth =  this.fullMonth[this.month];
  }

  getTheFirstOfTheCurrentMonth() {
    let firstOfTheCurrentMonth = new Date();
    firstOfTheCurrentMonth.setMonth(firstOfTheCurrentMonth.getMonth(), 1);
    return this.firstOfTheCurrentMonth = firstOfTheCurrentMonth;
  }

  getTheFirstOfNextMonth() {
    let firstOfNextMonth = new Date();
    firstOfNextMonth.setMonth(firstOfNextMonth.getMonth()+1, 1);
    return this.firstOfNextMonth = firstOfNextMonth;
  }
}
