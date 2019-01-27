import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-incidents',
  templateUrl: 'incidents.page.html',
  styleUrls: ['incidents.page.scss']
})
export class IncidentsPage {

  constructor(public navCtrl: NavController) {
  }

  getDetails() {
    this.navCtrl.navigateRoot('/details');
  }

}
