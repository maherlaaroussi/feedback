import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPage } from './add.page';
import {MatSelectModule, MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule.forChild([{ path: '', component: AddPage }])
  ],
  declarations: [AddPage]
})
export class AddPageModule {}
