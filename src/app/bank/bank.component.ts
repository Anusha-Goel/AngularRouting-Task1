import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 bal:any="";
 amt:any="";
 amt1:any="";
 amt2:any="";
           openAcc()
           { 
               var tot=this.amt;
               if(tot<=5000)
               {
                   alert("Amount should be greater than 5000.");
               }
               else 
               {
                   alert("Account created with the amount of :Rs"+tot);
                   this.bal=tot;
               }
               
           }
           
            withdraw()
               {
                
      
                   
                   if(this.amt1 >this.bal)
                   {
                       alert("Not Enough Balance In the account:");
                   }
                   else
                   {   var balance=this.bal-this.amt1;
                       alert("Withdrawal Successfull ");
                       this.bal=balance;   
                   }
               }
               deposit()
               {
                   var deposit=this.amt2*1;
                   var total=this.bal*1;
                   var balance= deposit + total;
                   this.bal=balance ;
                   alert("Amount Deposited :");
                   }    
               }