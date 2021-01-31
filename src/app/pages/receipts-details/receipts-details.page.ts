import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceiptService, Receipt } from "src/app/services/receipt.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-receipts-details',
  templateUrl: './receipts-details.page.html',
  styleUrls: ['./receipts-details.page.scss'],
})
export class ReceiptsDetailsPage implements OnInit {

  receipt: Receipt = {
    name: "",
    notes: "",

  };

  constructor(private activatedRoute: ActivatedRoute, private receiptService,
    private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.receiptService.getReceipts(id).subscribe(receipt => {
        this.receipt = receipt;
      });
    }
  }

  addReceipt() {
    this.receiptService.addIdea(this.receipt).then(() => {
      this.router.navigateByUrl("/");
      this.showToast("Receipt Added");
    }, err => {
      this.showToast("There was a problem adding your receipt")
    });
  }
  deleteReceipt() {
    this.receiptService.deleteIdea(this.receipt.id).then(() => {
      this.router.navigateByUrl("/");
      this.showToast("Receipt Deleted");
    }, err => {
      this.showToast("There was a problem deleting your receipt")
    })
  }
  updateReceipt() {
    this.receiptService.updateIdea(this.receipt).then(() => {
      this.showToast("Receipt Updated");
    }, err => {
      this.showToast("There was a problem updating your receipt")
    })
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present())
  }

}
