import { Component, Injectable, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'live-date', //Place this in app.component.html. Do not place in index.html
  template: '<p>{{ myDate | date: \"yyyy-MM-dd HH:mm:ss\" }}</p>',
  styleUrls: [ './app.component.css' ]
})

export class LiveDateComponent {
  myDate = Date.now();
  ngOnInit() {
    setInterval(() => {this.myDate = Date.now();}, 1000);
  }
}
