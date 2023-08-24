import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting.component';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit, AfterViewChecked {

  public appTitle:string;
  public greetingTime:Date;

  @ViewChild(GreetingComponent)
  public greetingComponent!:GreetingComponent;

  constructor() { 
    this.appTitle = "Online Bazzar";
    this.greetingTime = new Date();
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.greetingTime = this.greetingComponent.now;
  }
}
