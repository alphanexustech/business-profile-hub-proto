import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-landing',
  templateUrl: './output-landing.component.html',
  styleUrls: ['./output-landing.component.css']
})



export class OutputLandingComponent implements OnInit {
  imgPath01: string;
  imgPath02: string;
  businessName: string;

  constructor() { }

  ngOnInit(): void {
    // IDEA: Change to a place on our server
    this.imgPath01 = "assets/images/people/smiling-woman-wearing-silver-colored-stud-earrings-and-black-1197132.jpg";
    this.imgPath02 = "assets/images/people/man-holding-white-teacup-in-front-of-gray-laptop-842567.jpg";
    this.businessName = "Alpha Nexus Technolgies LLC"

    //At the nexus of complex systems lies the primary intersection of development and design. We navigate this exciting territory with repeatable techniques. We act as your guide and trusted advisor. Our services start at the design phase. Next, we traverse the landmarks of product design and development with you. We end our journey with complete products - fully bespoke and customized for your users.
  }

}
