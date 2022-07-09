import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';


interface LayoutRow {
  imgPath: any;
  header: string;
  line: string;
}

@Component({
  selector: 'app-output-landing',
  templateUrl: './output-landing.component.html',
  styleUrls: ['./output-landing.component.css']
})

export class OutputLandingComponent implements OnInit {
  userInput: any;
  businessName: string;
  layoutRows: LayoutRow[];
  
  landingExists: boolean;
  aboutExists: boolean;
  contactExists: boolean;

  constructor(
    private userService: UserService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.layoutRows = [];
    this.userService.getUserData()
    .subscribe(userData => {
        this.userInput = userData?.userInput
        this.businessName = this.userInput?.businessname;

        for (const _file in userData?.assets.files) {
          this.layoutRows.push({
            imgPath: this.parseFileToUrl(userData.assets.files[_file]),
            header: '',
            line: this.userInput[_file + 'text']
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
