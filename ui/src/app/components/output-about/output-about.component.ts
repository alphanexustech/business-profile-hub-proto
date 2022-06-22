import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-about',
  templateUrl: './output-about.component.html',
  styleUrls: ['./output-about.component.css']
})
export class OutputAboutComponent implements OnInit {
  businessName: string;

  constructor() { }

  ngOnInit(): void {
    // IDEA: Change to a place on our server
    this.businessName = "Alpha Nexus Technolgies LLC"
  }

}
