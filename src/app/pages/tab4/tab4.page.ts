import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})



export class Tab4Page implements OnInit {

  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.requestDataOff()
  }

  converterForm = new FormControl('')

  text = ""
  from = "PLN"
  to = "GBP"
  amount = "100"
  resultOff = 0
  fromOff = "PLN"
  toOff = "GBP"
  exchange = 0.18277797
  amountOff = 50

  requestData(){
    var myHeaders = new Headers();
    myHeaders.append("apikey", "Extida2M5r9d2oNDT5Wq4ER7gfRzAMhH");
    const httpOptions = {
      headers: new HttpHeaders({
        "apikey": "Extida2M5r9d2oNDT5Wq4ER7gfRzAMhH"
      })
    };
    
    this.http.get("https://api.apilayer.com/exchangerates_data/convert?to="+ this.to +"&from="+ this.from +"&amount="+ this.amount, httpOptions).subscribe((data: any) =>
    {
      this.text = data
      console.log(data)
    })
  }

  requestDataOff(){
    const number = this.amountOff.valueOf()
    const testttt = this.fromOff.valueOf()
    console.log(number)
    this.resultOff = ( number * this.exchange )
  }
  

}
