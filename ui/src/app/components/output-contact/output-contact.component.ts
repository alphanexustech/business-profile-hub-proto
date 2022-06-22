import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MainService } from '../../services/main.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-output-contact',
  templateUrl: './output-contact.component.html',
  styleUrls: ['./output-contact.component.css']
})
export class OutputContactComponent implements OnInit {
  businessName: string;
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mainService: MainService,
  ) { }

  formSubscription: Subscription = new Subscription;

  ngOnInit(): void {
    this.initializeForm(); 
    
    // IDEA: Change to a place on our server
    this.businessName = "Alpha Nexus Technolgies LLC"
  }

  ngOnDestroy() {
    if (this.formSubscription) this.formSubscription.unsubscribe();
  }

  initializeForm(): void {
    this.contactForm =  this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
      })
  }

  onSubmit(): void {
    console.log(this.contactForm)
  }

}
