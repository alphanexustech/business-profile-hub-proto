import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-paragraph',
  templateUrl: './basic-paragraph.component.html',
  styleUrls: ['./basic-paragraph.component.css']
})
export class BasicParagraphComponent implements OnInit {
  header: string;
  line: string;

  constructor() { }

  ngOnInit(): void {
    this.header = "I'm a title";
    this.line = "Let's talk about the possibilities, together";
  }

}
