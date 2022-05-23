import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-details-modify',
  templateUrl: './table-details-modify.component.html',
  styleUrls: ['./table-details-modify.component.css']
})
export class TableDetailsModifyComponent implements OnInit {

  detailsForm: object;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadNewForm()
  }

  loadNewForm() {
    this.detailsForm = new FormGroup({
      element: new FormControl(null, Validators.required),
      position: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      rank: new FormControl(null, Validators.required),
    });
  }

  saveData(data: any) {
    console.log(data.status)

    window.alert(JSON.stringify(data.value))

    if(data.status == 'VALID') {
      this.router.navigate(['/overview'])
    }
  }

}
