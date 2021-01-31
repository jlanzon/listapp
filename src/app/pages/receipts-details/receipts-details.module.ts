import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceiptsDetailsPage } from './receipts-details.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiptsDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceiptsDetailsPage]
})
export class ReceiptsDetailsPageModule {}
