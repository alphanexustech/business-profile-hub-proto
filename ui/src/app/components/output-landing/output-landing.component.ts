import { Component, OnInit } from '@angular/core';


interface LayoutRow {
  imgPath: string;
  header: string;
  line: string;
}

@Component({
  selector: 'app-output-landing',
  templateUrl: './output-landing.component.html',
  styleUrls: ['./output-landing.component.css']
})

export class OutputLandingComponent implements OnInit {
  businessName: string;
  layoutRows: LayoutRow[];  

  constructor() { }

  ngOnInit(): void {
    this.layoutRows = [];

    // MOCK
    this.layoutRows.push({
      imgPath: "assets/images/people/smiling-woman-wearing-silver-colored-stud-earrings-and-black-1197132.jpg",
      header: "Advanced Product Development",
      line: "At the nexus of complex systems lies the primary intersection of development and design. We navigate this exciting territory with repeatable techniques. We act as your guide and trusted advisor. Our services start at the design phase. Next, we traverse the landmarks of product design and development with you. We end our journey with complete products - fully bespoke and customized for your users."
    })

    this.layoutRows.push({
      imgPath: "assets/images/people/man-holding-white-teacup-in-front-of-gray-laptop-842567.jpg",
      header: '',
      line: `
        We think about complex problems frequently.
        Our unique and diverse perspective is forged from experience with both commercial and government projects.
        We build software components from the initial phases of conception to completion.
        Our enhanced user interfaces meet modern standards while maintaining clear user experiences.
        We provide 'top-notch' product development support to our clients.
        In addition to improving code quality, visual aspects of software, and functionality of systems,
        we build systems which actually work for their audience.
      `
    })

    // IDEA: Change to a place on our server
    this.businessName = "Alpha Nexus Technolgies LLC"

  }

}
