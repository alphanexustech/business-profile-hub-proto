import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logo-square',
  templateUrl: './logo-square.component.html',
  styleUrls: ['./logo-square.component.css']
})
export class LogoSquareComponent implements OnInit {
  userInput: any;
  addressLine01: string;
  addressLine02: string;
  phone: string;
  imgPath: any;

  constructor(
    private userService: UserService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.userService.getUserData()
    .subscribe(userData => {
        this.userInput = userData?.userInput
        if (this.userInput) {
          this.addressLine01 = this.userInput?.businessaddressline1;
          this.addressLine02 = this.userInput?.businessaddressline2;
          this.phone = this.userInput?.businessphone;
          this.imgPath = this.parseFileToUrl(userData.assets.logos["logo1"]);
        }      
    })
  }
  
  parseFileToUrl(file) {
    if (file) {
      let objectURL = window.URL.createObjectURL(file)
      return this.sanitizer.bypassSecurityTrustResourceUrl(objectURL)
    }
  }

}
