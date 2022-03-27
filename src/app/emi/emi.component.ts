import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  amt: any="";
  int: any="";
  years: any="";
  tot = 0;

  calculator(){
    var p = this.amt;
    var cal = this.years * 12;
    var int = this.int / 100 / 12;
   var x = Math.pow(1 + int, cal);
   var mbasis = (p * x * int) / (x - 1);
   var totalInterest = (mbasis * cal - p); 
    return this.tot = ((mbasis * cal));
  }
}
