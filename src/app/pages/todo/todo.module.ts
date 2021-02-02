import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoPage } from './todo.page';
import { ItemsComponent } from 'src/app/components/items/items.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TodoPage }])
  ],
  declarations: [
    TodoPage,
    ItemsComponent
  ],
})
export class TodoPageModule {}
