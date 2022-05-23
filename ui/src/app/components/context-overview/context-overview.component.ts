import { Component, OnInit, OnDestroy} from '@angular/core';
import { MainService } from '../../services/main.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-context-overview',
  templateUrl: './context-overview.component.html',
  styleUrls: ['./context-overview.component.css']
})
export class ContextOverviewComponent implements OnInit {

  elements: Object[];
  contextSubscription: Subscription;
  focusSubscription: Subscription;

  selectedElement: any;

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.getData()
  }

  ngOnDestroy() {
    if (this.contextSubscription) this.contextSubscription.unsubscribe();
    if (this.focusSubscription) this.focusSubscription.unsubscribe();
  }

  /*
   * Main Logic
   */

  getData() {
    this.contextSubscription = this.mainService.get('/elements/')
    .subscribe(response => {
      this.elements = []

      for (let i in response) {
        this.elements.push(response[i])
      }

    }, err => {
      console.log(err)
    });
  }

  onSelect(element: Object): void {

    this.focusSubscription = this.mainService.get('/elements/' + element['position'] + '/')
    .subscribe(response => {
      this.selectedElement = response;
      console.log(this.selectedElement)
    }, err => {
      console.log(err)
    });
  }

}
