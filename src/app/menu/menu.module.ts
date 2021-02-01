import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './menu.router.module';

import { MenuPage } from './menu.page';
import { FirebaseUIModule } from 'firebaseui-angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    FirebaseUIModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
