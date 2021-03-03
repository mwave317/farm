import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  date = new Date();
  month = this.date.getMonth();
  nextMonth = this.month + 1;
  previousMonth = this.month - 1;
  fullMonth: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July ', 'August', 'September', 'October', 'November', 'December'];
  fullDaysOfTheWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  displayedPreviousMonth: string = '';
  displayedMonth: string = '';
  displayedNextMonth: string = '';

  year = this.date.getFullYear();
  firstDay = (new Date(this.year, this.month)).getDay();
  firstDayOfThePreviousMonth: Date;
  firstOfTheCurrentMonth: Date;
  daysInThePreviousMonth: number;
  daysInTheCurrentMonth: number;
  daysInTheNextMonth: number;
  firstOfNextMonth: Date;
  listedDaysInThePreviousMonth: number[] = [];
  daysDisplayedOnTheCalendar: number[] = [];
  listedDaysInTheNextMonth: number[] = [];
  lastDayOfThePreviousMonth: number;
  previousDaysNeeded = 0;
  displayedDaysOfThePreviousMonth;

  constructor() { }

  ngOnInit(): void {
    this.displayMonth();
    this.getTheFirstOfThePreviousMonth();
    this.getTheFirstOfTheCurrentMonth();
    this.getTheFirstOfNextMonth();
    this.dateLastMonth();
    this.daysOfTheCurrentMonth();
    this.daysOfTheNextMonth();
    this.displayPreviousMonth();
    this.displayNextMonth();
    this.startTheCurrentMonthOnTheCorrectDay();
    console.log('This is the previous month', this.previousMonth);
    console.log('This is the current month', this.month);
    console.log('This is the next month', this.nextMonth);
    console.log('This is the written previous month', this.displayedPreviousMonth);
    console.log('This is the written month', this.displayedMonth)
    console.log('This is the written next month', this.displayedNextMonth)


  }

  displayPreviousMonth() {
    return this.displayedPreviousMonth = this.fullMonth[this.month - 1];
  }

  displayMonth() {
    return this.displayedMonth = this.fullMonth[this.month];
  }

  displayNextMonth() {
    return this.displayedNextMonth = this.fullMonth[this.month + 1];
  }

  getTheFirstOfThePreviousMonth() {
    let firstDayOfThePreviousMonth = new Date();
    firstDayOfThePreviousMonth.setMonth(firstDayOfThePreviousMonth.getMonth() - 1, 1);
    this.firstDayOfThePreviousMonth = firstDayOfThePreviousMonth;
    console.log('This is the first day of the previous month', this.firstDayOfThePreviousMonth);
    return this.firstDayOfThePreviousMonth = firstDayOfThePreviousMonth;
  }

  getTheFirstOfTheCurrentMonth() {
    let firstOfTheCurrentMonth = new Date();
    firstOfTheCurrentMonth.setMonth(firstOfTheCurrentMonth.getMonth(), 1);
    this.firstOfTheCurrentMonth = firstOfTheCurrentMonth;
    console.log('This is the first of the current month', this.firstOfTheCurrentMonth)
    return this.firstOfTheCurrentMonth;
  }

  getTheFirstOfNextMonth() {
    let firstOfNextMonth = new Date();
    firstOfNextMonth.setMonth(firstOfNextMonth.getMonth() + 1, 1);
    this.firstOfNextMonth = firstOfNextMonth;
    console.log('This is the first day of the next month', this.firstOfNextMonth);
    return this.firstOfNextMonth = firstOfNextMonth;
  }

  daysOfTheCurrentMonth() {
    const date = new Date();
    let lastOfTheCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    console.log(lastOfTheCurrentMonth);
    let splitlastOfTheCurrentMonth = lastOfTheCurrentMonth.toString().split(' ');
    this.daysInTheCurrentMonth = parseInt(splitlastOfTheCurrentMonth[2]);
    console.log(splitlastOfTheCurrentMonth);
  }

  daysOfTheNextMonth() {
    const date = new Date();
    let lastOfTheNextMonth = new Date(date.getFullYear(), date.getMonth() + 2, 0);
    console.log(lastOfTheNextMonth);
    let splitlastOfTheNextMonth = lastOfTheNextMonth.toString().split(' ');
    this.daysInTheNextMonth = parseInt(splitlastOfTheNextMonth[2]);
    console.log('These are the days in the next month', this.daysInTheNextMonth);
  }

  dateLastMonth() {
    const date = new Date();
    date.setDate(0);
    this.daysInThePreviousMonth = date.getDate();
    console.log('These are the days in the pevious month', this.daysInThePreviousMonth);
  }

  startTheCurrentMonthOnTheCorrectDay() {
    
    let previousDaysAddedToTheCalendar: number[] = [];
    let splitCurrentMonth = this.firstOfTheCurrentMonth.toString().split(' ');

    for (let i = 1; i <= this.daysInThePreviousMonth; i++) {
      this.listedDaysInThePreviousMonth.push(i);
    }
    console.log('These are the listed days in the previous month', this.listedDaysInThePreviousMonth);
    if (this.daysInTheNextMonth) {
      for (let i = 1; i <= this.daysInTheNextMonth; i++) {
        this.listedDaysInTheNextMonth.push(i);
      }
      console.log('These are the listed days in the next month', this.listedDaysInTheNextMonth);
    }

    if (splitCurrentMonth[0] === 'Mon') {
      this.previousDaysNeeded = 0; 
    }
    if (splitCurrentMonth[0] === 'Tue') {
      this.previousDaysNeeded = 1;
    }
    if (splitCurrentMonth[0] === 'Wed') {
      this.previousDaysNeeded = 2;
    }
    if (splitCurrentMonth[0] === 'Thu') {
      this.previousDaysNeeded = 3;
    }
    if (splitCurrentMonth[0] === 'Fri') {
      this.previousDaysNeeded = 4;
    }
    if (splitCurrentMonth[0] === 'Sat') {
      this.previousDaysNeeded = 5;
    }

    this.displayedDaysOfThePreviousMonth = this.listedDaysInThePreviousMonth.length - this.previousDaysNeeded;

        while( this.displayedDaysOfThePreviousMonth <= this.listedDaysInThePreviousMonth.length) {
          this.daysDisplayedOnTheCalendar.push(this.displayedDaysOfThePreviousMonth++);
        }
  
    if (this.daysInTheCurrentMonth) {
      for (let i = 1; i <= this.daysInTheCurrentMonth; i++) {
        this.daysDisplayedOnTheCalendar.push(i);
      }
      
      console.log('These are the days being displayed on the calendar ', this.daysDisplayedOnTheCalendar);
    }



  }
}
