import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailsPage } from './details.page';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    RouterModule.forChild([{ path: '', component: DetailsPage }])
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {

}
