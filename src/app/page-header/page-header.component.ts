import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  public appTitle:string;
  public greetingTime:Date;

  constructor() { 
    this.appTitle = "Online Bazzar";
    this.greetingTime = new Date();
  }

  ngOnInit(): void {
  }

}
