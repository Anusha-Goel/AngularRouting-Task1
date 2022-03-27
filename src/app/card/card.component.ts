import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  sal:any=" ";
  show:string="";
  salary(){

  if(this.sal<=10000)
  {
    this.show="You are not eligible for any card."
  }
  
  else if(this.sal>10000 && this.sal<30000)
  {
this.show="You are eligible for silver card."
  }
  else if(this.sal>=30000 && this.sal<50000)
{
  this.show="You are eligible for gold card.";
}
else 
{
  this.show="You are eligible for platinum card."
}
}
} 