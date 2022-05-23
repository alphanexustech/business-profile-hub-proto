import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-context-focus',
  templateUrl: './context-focus.component.html',
  styleUrls: ['./context-focus.component.css']
})
export class ContextFocusComponent implements OnInit {

  @Input() element: any;

  constructor() { }

  ngOnInit() {}

}
