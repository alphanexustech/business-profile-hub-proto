import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { stringify } from 'querystring';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  selectedOptions: {};
  errorMessage: string;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.selectedOptions = {
      "landing": false,
      "about": false,
      "contact": false
    };
  }

  checkSelected(key) {
    return this.selectedOptions[key];
  }
  
  selectOption(key) {
    this.errorMessage = '';
    this.selectedOptions[key] = !this.selectedOptions[key];

    let selectedLayouts = [];
    for (const key in this.selectedOptions) {
      if (this.selectedOptions[key]) {
        selectedLayouts.push(key)
      }
    }
    // IDEA: Make this into a service
    sessionStorage.setItem("selectedLayouts", JSON.stringify(selectedLayouts));
  }

  updateSelectedPages() {
    // IDEA: Persist this data, upload to the server

    if (this.selectedOptions["landing"]) {
      this.router.navigateByUrl('/output-landing');
    } else if (this.selectedOptions["about"]) {
      this.router.navigateByUrl('/output-about');
    } else if (this.selectedOptions["contact"]) {
      this.router.navigateByUrl('/output-contact');
    } else {
      this.errorMessage = "Choose at least one layout";
      this._snackBar.open(this.errorMessage, 'Got it!');
    }
  }
}