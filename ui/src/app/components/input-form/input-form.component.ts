import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';

interface BusinessInfo {
  "businessInfo": string;
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
  inputForm: FormGroup;

  // files: FileObject[] = []; 
  files: string[] = [];

  businessInfo: BusinessInfo = {
    businessInfo: '',
    logos: {},
    files: {}
  };

  constructor(private fb: FormBuilder) { }
  
  // constructor(private http: HttpClient) { }
  
  ngOnInit() {
    console.log(this.files)
    this.initializeForm(); 
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
    console.log(this.inputForm);
  }

  onFileSelected(fileKey, event) {
    console.log(event.target.files)
    const selectedFile = <File>event.target.files[0];
    console.log(event);
    // const file = {
    //   type: "image",
    //   file: this.selectedFile,
    //   fileName: this.selectedFile.name
    // }
    console.log(fileKey)
    this.businessInfo.files[fileKey] = selectedFile.name;
    console.log(this.businessInfo)
  }

  // onUpload() {
  //  const fd = new FormData();
  //  fd.append('image', this.selectedFile, this.selectedFile.name)
  //  this.http.post('<aws http server url>', fd{
  //    reportProgress: true;
  //    observe: 'events'
  //  })
  //    .subscribe(event => {
  //      if (event.type === HttpEventType.UploadProgress) {
  //        console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
  //      } else if (event.type === HttpEventType.Response) {
  //        console.log(event);
  //      } 
  //      console.log(event);
  //    });
  //  }
}   
