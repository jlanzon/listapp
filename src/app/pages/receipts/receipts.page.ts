import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ReceiptService, Receipt } from 'src/app/services/receipt.service';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.page.html',
  styleUrls: ['./receipts.page.scss'],
})
export class ReceiptsPage implements OnInit {

  private receipts: Observable<Receipt[]>;

  constructor( private receiptService: ReceiptService) { }

  ngOnInit() {
    this.receipts = this.receiptService.getReceipts();
  }

}
