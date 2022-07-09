import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MainService } from '../../services/main.service';
import { Subscription } from 'rxjs';

import {DomSanitizer} from '@angular/platform-browser';

interface Assets {
  "logos": {};
  "files": {}
}

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})

export class InputFormComponent implements OnInit {
  fileName = ''
  activeForm = 'info'
  imageSrc: any;

  inputForm: FormGroup;

  assets: Assets = {
    logos: {},
    files: {}
  };
  formSubscription: Subscription = new Subscription;

  constructor(
    private fb: FormBuilder,
    private mainService: MainService,
    private sanitizer: DomSanitizer,
  ) { }
  
  
  ngOnInit() {
    this.initializeForm(); 
  }

  ngOnDestroy() {
    if (this.formSubscription) this.formSubscription.unsubscribe();
  }

  initializeForm(): void {
    this.inputForm =  this.fb.group({
      firstname: '',
      lastname: '',
      suffix: '',
      businessname: '',
      businessemail: '',
      businessphone: '',
      businessaddressline1: '',
      businessaddressline2: '',
      city: '',
      zip: '',
      image1text: '',
      image2text: '',
      image3text: '',
      image4text: '',
      image5text: '',
      })
  }
  
  switchForm(activeForm): void {
    this.activeForm = activeForm
  }

  uploadData(currentForm, activeForm) {
    switch (currentForm) {
      case 'info':
        // IDEA: Input Form as JSON file
        console.log(this.inputForm);
        break;
        case 'logo':
        // IDEA: Logo as file
        break;
        case 'image':
        // IDEA: Images as files
        break;
      default:
        break;
    }

    this.switchForm(activeForm)
  }
  
  onFileSelected(fileKey, event) {
    const file:File = event.target.files[0];

    // IDEA: Manage the condition in a less hack way
    const fileCat = fileKey[0];
    switch (fileCat) {
      // Image Files
      case 'f':
        this.assets.files[fileKey] = file;
        break;
      // Logo Files
      case 'l':
        this.assets.logos[fileKey] = file;
        break;
      default:
        break;
    }
    this.fileUpload(file)
  }

  /*
   *
   * Send this as multipart form data
   *
   **/
  fileUpload(file) {

    if (file) {
        console.log(file)
      
        let imageSrc;
        var reader  = new FileReader();
        // it's onload event and you forgot (parameters)
        reader.onload = function(e)  {
            // the result image data
            imageSrc = e.target.result;

            console.log(e.target.result)
        }
        // you have to declare the file loading
        // reader.readAsDataURL(file);
        let objectURL = window.URL.createObjectURL(file);
        this.imageSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(objectURL)

        console.log(file)

        this.fileName = file.name;

        const formData = new FormData();

        formData.append(file.name, file);

        const fileAPI = `http://localhost:5000/files/`;
        this.formSubscription = this.mainService.filePost(fileAPI, formData)
          .subscribe(response => {
            console.log(response)
            // this.router.navigate(['/review']);
          }, err => {
            console.log(err)
          });
    }

    // IDEA: Add a progress bar
    // .subscribe(event => {
    //   if (event.type === HttpEventType.UploadProgress) {
    //     console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
    //   } else if (event.type === HttpEventType.Response) {
    //     console.log(event);
    //   } 
    //     console.log(event);
    //   });
  
  }
}   
