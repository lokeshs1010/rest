import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public regions: any = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor() { }

  ngOnInit() {
  }

}
