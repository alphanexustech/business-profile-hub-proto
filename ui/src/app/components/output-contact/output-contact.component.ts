import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-contact',
  templateUrl: './output-contact.component.html',
  styleUrls: ['./output-contact.component.css']
})
export class OutputContactComponent implements OnInit {
  businessName: string;

  constructor() { }

  ngOnInit(): void {
    // IDEA: Change to a place on our server
    this.businessName = "Alpha Nexus Technolgies LLC"
  }

}
