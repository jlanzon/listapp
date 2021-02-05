import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPage } from './todo.page';
import { FormGroup } from '@angular/forms';
import { ItemsComponent } from 'src/app/components/items/items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: TodoPage }])
  ],
  declarations: [
    TodoPage,
    ItemsComponent
  ],
})
export class TodoPageModule {}
