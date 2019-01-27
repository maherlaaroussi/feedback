import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: 'add.page.html',
  styleUrls: ['add.page.scss'],
})
export class AddPage {

  addForm: FormGroup;
  titre: string='';
  description: string='';
  date: string='';
  lieu: string='';

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      'titre' : [null, Validators.required],
      'description' : [null, Validators.required],
      'date' : [null, Validators.required],
      'lieu' : [null, Validators.required],
    });
  }

}
