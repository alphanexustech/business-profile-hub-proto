import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';

import { MainService } from '../../services/main.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

interface Assets {
  "logos": {};
  "files": {}
}

interface FileObject {
  type: string;
  file: File;
  fileName: string;
}

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})

export class InputFormComponent implements OnInit {
  fileName = ''

  inputForm: FormGroup;

  assets: Assets = {
    logos: {},
    files: {}
  };
  formSubscription: Subscription = new Subscription;

  constructor(
    private fb: FormBuilder,
    private mainService: MainService,
    private authService: AuthService,
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
  
  onSubmit(): void {
    // console.log(this.inputForm);
  }

  // onFileSelected(fileKey, event) {
  //   const selectedFile = <File>event.target.files[0];
  //   const file = {
  //     type: "image", 
  //     file: selectedFile,
  //     fileName: selectedFile.name
  //   }

  //   // IDEA: Manage the condition in a less hack way
  //   const fileCat = fileKey[0];
  //   switch (fileCat) {
  //     // Image Files
  //     case 'f':
  //       this.assets.files[fileKey] = file;
  //       break;
  //     // Logo Files
  //     case 'l':
  //       this.assets.logos[fileKey] = file;
  //       break;
  //     default:
  //       break;
  //   }
  //   console.log("Line 96 firing")
  //   this.fileUpload(file)


  // }

  /*
   *
   * Send this as multipart form data
   *
   **/
  fileUpload(file) {
    // console.log("Here file is: ")
    // console.log(file)

    const fileAPI = `http://localhost:5000/files/`;
    // const body = file;
    // const body = {"data": {"file": file}};
    var formData = new FormData()
    // add enctype multipart form data
    // enctype="multipart/form-data"
    formData.append("image", file)


    this.formSubscription = this.mainService.filePost(fileAPI, formData)
    .subscribe(response => {
      console.log(response)
      // this.router.navigate(['/review']);
    }, err => {
      console.log(err)
    });


  // .subscribe(event => {
  //   if (event.type === HttpEventType.UploadProgress) {
  //     console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
  //   } else if (event.type === HttpEventType.Response) {
  //     console.log(event);
  //   } 
  //     console.log(event);
  //   });
  
  }






  onFileSelected(key, event) {

    const file:File = event.target.files[0];

    if (file) {
        console.log(file)

        this.fileName = file.name;

        const formData = new FormData();

        formData.append(file.name, file);

        const fileAPI = `http://localhost:5000/files/`;
        const upload$ = this.mainService.filePost(fileAPI, formData);

        upload$.subscribe();
    }

  }
}   
