import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.css']
})
export class PageFooterComponent implements OnInit {

  public message:string;
  public currentDate:Date;

  constructor() { 
    this.message = "Copyright &copy; Orsted Malaysia 2023";
    this.currentDate = new Date();
  }

  ngOnInit(): void {
  }

}
