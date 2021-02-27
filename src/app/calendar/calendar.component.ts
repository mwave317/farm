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
  fullDaysOfTheWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  displayedMonth: string = '';
  year = this.date.getFullYear();
  firstDay = (new Date(this.year, this.month)).getDay();
  firstDayOfThePreviousMonth: Date;
  firstOfTheCurrentMonth: Date;
  daysInTheCurrentMonth: number = 28;
  firstOfNextMonth: Date;
  numberOfDays: number[] = [];
 
  constructor() { }

  ngOnInit(): void {
    this.displayMonth();
    this.getTheFirstOfThePreviousMonth();
    this.getTheFirstOfTheCurrentMonth();
    this.startTheCurrentMonthOnTheCorrectDay();
    this.getTheFirstOfNextMonth();
    
  }

  displayMonth () {
   return this.displayedMonth =  this.fullMonth[this.month];
  }

  getTheFirstOfThePreviousMonth() {
    let firstDayOfThePreviousMonth = new Date();
    firstDayOfThePreviousMonth.setMonth(firstDayOfThePreviousMonth.getMonth()-1, 1);
    return this.firstDayOfThePreviousMonth = firstDayOfThePreviousMonth;
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

  startTheCurrentMonthOnTheCorrectDay() {
    let splitCurrentMonth = this.firstOfTheCurrentMonth.toString().split(' ');
    if (splitCurrentMonth[0] === 'Mon') {
      console.log('hello');
    }

    if(this.daysInTheCurrentMonth) {
      for (let i = 1; i<= this.daysInTheCurrentMonth; i++){ 
        this.numberOfDays.push(i);
      }
      console.log(this.numberOfDays);
    }

    console.log(splitCurrentMonth);
  }
}
