import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MainService } from '../../services/main.service';
import { Observable, Subscription } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table-overview',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.css']
})
export class TableOverviewComponent implements OnInit {

  elements: PeriodicElement[] = []
  tableSubscription: Subscription = new Subscription;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource = new MatTableDataSource([]);


  constructor(
    private mainService: MainService
  ) { }

  @ViewChild(MatSort) sort: MatSort = new MatSort;

  ngOnInit() {
    this.getData()
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    if (this.tableSubscription) this.tableSubscription.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*
   * Main Logic
   */

  getData() {
    this.tableSubscription = this.mainService.get('/elements/')
    .subscribe(response => {
      for (let i in response) {
        this.elements.push(Object(response)[i])
      }

      this.dataSource = new MatTableDataSource(this.elements);
      this.dataSource.sort = this.sort;
    }, err => {
      console.log(err)
    });
  }

  storeElement(element: object) {
    localStorage.setItem("element", JSON.stringify(element))
  }

}
