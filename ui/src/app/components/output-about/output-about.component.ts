import { Component, OnInit } from '@angular/core';

interface AboutRow {
  imgPath: string;
  header: string;
  line: string;
}

@Component({
  selector: 'app-output-about',
  templateUrl: './output-about.component.html',
  styleUrls: ['./output-about.component.css']
})

export class OutputAboutComponent implements OnInit {
  businessName: string;
  aboutRows: AboutRow[];

  landingExists: boolean;
  aboutExists: boolean;
  contactExists: boolean;

  constructor() { }

  ngOnInit(): void {
    this.aboutRows = [];
    
    // IDEA: Rewrite this to be follow DRY
    const selectedLayouts = JSON.parse(sessionStorage["selectedLayouts"]);

    this.landingExists = selectedLayouts.includes('landing');
    this.aboutExists = selectedLayouts.includes('about');
    this.contactExists = selectedLayouts.includes('contact');

    // MOCK
    this.aboutRows.push({
      imgPath: "assets/images/logo/antlogo-full.png",
      header: "Our Story",
      line: `
        Our knowledge of building simple and clear user experiences allow us to follow best practices. We aim to rigorously adhere to the following process. We focus on optimizing how systems work which results in useful software for users.
        We researched different solutions to JavaScript problems, and we found the following tools. These tools are now part of our process. ES6 Modules combined with this toolset allow us to write modern JavaScript.
      `
    })

    // IDEA: Change to a place on our server
    this.businessName = "Alpha Nexus Technolgies LLC"

  }

}
