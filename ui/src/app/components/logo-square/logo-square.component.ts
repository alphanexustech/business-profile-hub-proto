import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-square',
  templateUrl: './logo-square.component.html',
  styleUrls: ['./logo-square.component.css']
})
export class LogoSquareComponent implements OnInit {
  imgPath: string;
  addressLine01: string;
  addressLine02: string;
  phone: string;

  constructor() { }

  ngOnInit(): void {
    this.imgPath = "assets/images/logo/antlogo-full.png";
    this.addressLine01 = "218 Gooney Falls Ln";
    this.addressLine02 = "Front Royal VA 22630";
    this.phone = "(540) 618.0289";
  }

}
