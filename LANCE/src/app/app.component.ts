import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Angular';
  currentNav: string = '';
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navClick(current:string) {
    this.currentNav = current;
  }

}
