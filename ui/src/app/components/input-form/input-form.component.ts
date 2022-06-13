import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})

export class InputFormComponent implements OnInit { 
  locations: string[] = ['Downtown', 'S. Bay', 'Lakeside' ]
  volunteerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm(); 
  }

  initializeForm(): void {
    this.volunteerForm =  this.fb.group({
      name: 'Name here',
      phoneNumber: '',
      preferredLocation: '',
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false
      }),
      references: this.fb.array([this.fb.control('')])
    });
  }

  onSubmit(): void {
    console.log(this.volunteerForm);
  }

  selectLocation(event): void {
    this.volunteerForm.patchValue({
      preferredLocation: event.target.value
    });
  }

  addEmail(): void {
    this.references.push(this.fb.control(''));
  }

  removeEmail(index: number): void {
    this.references.removeAt(index);
  }

  get references(): FormArray {
    return this.volunteerForm.get('references') as FormArray;
  }
}
