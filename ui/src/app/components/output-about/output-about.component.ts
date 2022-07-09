import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';

interface AboutRow {
  imgPath: any;
  header: string;
  line: string;
}

@Component({
  selector: 'app-output-about',
  templateUrl: './output-about.component.html',
  styleUrls: ['./output-about.component.css']
})

export class OutputAboutComponent implements OnInit {
  userInput: any;
  businessName: string;
  aboutRows: AboutRow[];

  landingExists: boolean;
  aboutExists: boolean;
  contactExists: boolean;

  constructor(
    private userService: UserService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.aboutRows = [];

    this.userService.getUserData()
      .subscribe(userData => {
          this.userInput = userData?.userInput;
          console.log(this.userInput)
          this.businessName = this.userInput?.businessname;
  
          if (userData) {
            this.aboutRows.push({
              imgPath: this.parseFileToUrl(userData.assets.logos["logo1"]),
              header: '',
              line: this.userInput['logo1text']
            })
          }
      })

    
    // IDEA: Rewrite this to be follow DRY
    const selectedLayouts = JSON.parse(sessionStorage["selectedLayouts"]);

    this.landingExists = selectedLayouts.includes('landing');
    this.aboutExists = selectedLayouts.includes('about');
    this.contactExists = selectedLayouts.includes('contact');



  }

  parseFileToUrl(file) {
    if (file) {
      let objectURL = window.URL.createObjectURL(file)
      return this.sanitizer.bypassSecurityTrustResourceUrl(objectURL)
    }
  }

}
