import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.css']
})
export class PageFooterComponent implements OnInit{
  
  public copyright:string;
  public date:Date;

  constructor() {
    this.copyright = "Copyright &copy; Aerosaf Malaysia 2023 ";
    this.date = new Date();
  }

  ngOnInit(): void {
      
  }

}
