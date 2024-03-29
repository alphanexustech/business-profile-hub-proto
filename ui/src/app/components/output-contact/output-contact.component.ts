import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MainService } from '../../services/main.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-output-contact',
  templateUrl: './output-contact.component.html',
  styleUrls: ['./output-contact.component.css']
})
export class OutputContactComponent implements OnInit {
  userInput: any;
  businessName: string;
  contactForm: FormGroup;

  landingExists: boolean;
  aboutExists: boolean;
  contactExists: boolean;
  
  constructor(
    private fb: FormBuilder,
    private mainService: MainService,
    private userService: UserService,
  ) { }

  formSubscription: Subscription = new Subscription;

  ngOnInit(): void {
    this.initializeForm();

    this.userService.getUserData()
    .subscribe(userData => {
        this.userInput = userData?.userInput
        this.businessName = this.userInput?.businessname;
    })

    // IDEA: Rewrite this to be follow DRY
    const selectedLayouts = JSON.parse(sessionStorage["selectedLayouts"]);

    this.landingExists = selectedLayouts.includes('landing');
    this.aboutExists = selectedLayouts.includes('about');
    this.contactExists = selectedLayouts.includes('contact');
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
