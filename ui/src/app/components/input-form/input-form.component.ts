import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';

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
  inputForm: FormGroup;

  assets: Assets = {
    logos: {},
    files: {}
  };

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  
  
  ngOnInit() {
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
    // console.log(this.inputForm);
  }

  onFileSelected(fileKey, event) {
    const selectedFile = <File>event.target.files[0];
    const file = {
      type: "image", 
      file: selectedFile,
      fileName: selectedFile.name
    }

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
    console.log(this.assets)
    this.fileUpload(file)
  }

  fileUpload(file) {
  const fd = new FormData();
  fd.append(file.type, file.file, file.fileName)

  this.http.post('<aws http server url>', fd({
      reportProgress: true,
      observe: 'events'
  }))
  .subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {
      console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
    } else if (event.type === HttpEventType.Response) {
      console.log(event);
    } 
      console.log(event);
    });
  }
}   
