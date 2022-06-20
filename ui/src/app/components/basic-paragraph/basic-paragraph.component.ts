import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-paragraph',
  templateUrl: './basic-paragraph.component.html',
  styleUrls: ['./basic-paragraph.component.css']
})
export class BasicParagraphComponent implements OnInit {
  @Input() header: string;
  @Input() line: string;

  constructor() { }

  ngOnInit(): void { }

}
