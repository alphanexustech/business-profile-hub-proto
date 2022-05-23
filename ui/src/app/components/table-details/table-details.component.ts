import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators"; // RxJS v6

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent implements OnInit {

  element: any = {}
  elementID: string

  constructor(
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit() {
    this.loadElement()
  }

  loadElement() { // From storage, but check against route

    this.route.paramMap.subscribe(params => {
      this.elementID = params.get("id")
    })


    this.element = JSON.parse(localStorage.getItem("element"))

    if(this.element['position'] != this.elementID) {
        // Redirect to the element in localStorage
        this.router.navigate(['/element', this.element['position']])
    }
  }

}
