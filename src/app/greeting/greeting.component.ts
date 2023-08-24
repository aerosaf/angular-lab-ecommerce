import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  public now:Date;
  public setIntervalhandler: any;

  constructor(){
    this.now = new Date();
  }

  ngOnInit(): void {
    this.setIntervalhandler = setInterval(() => {
      this.now = new Date();
    }, 100)
  }

  ngOnDestroy(): void {
    clearInterval(this.setIntervalhandler);
  }

}
