import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  selectedOptions: {};

  constructor() { }

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
    this.selectedOptions[key] = !this.selectedOptions[key];
  }

  updateSelectedPages() {
    // IDEA: Persist this data, upload to the server
    console.log(this.selectedOptions)
  }


}
