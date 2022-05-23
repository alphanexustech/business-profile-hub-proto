import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

import {
  DisplayGrid,
  Draggable,
  GridsterComponent,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponentInterface,
  GridType
} from 'angular-gridster2';

interface Safe extends GridsterConfig {
  draggable: Draggable;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  options: Safe;
  dashboard: Array<GridsterItem>;

  static eventStart(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent): void {
    console.info('eventStart', item, itemComponent, event);
  }

  static eventStop(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent): void {
    console.info('eventStop', item, itemComponent, event);
  }

  static overlapEvent(source: GridsterItem, target: GridsterItem, grid: GridsterComponent): void {
    console.log('overlap', source, target, grid);
  }

  constructor() { }

  ngOnInit(): void {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.Always,
      pushItems: true,
      swap: false,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: "gridster-item-content",
        ignoreContent: false,
        dragHandleClass: "drag-handler",
        stop: HomeComponent.eventStop,
        start: HomeComponent.eventStart,
        dropOverItems: false,
        dropOverItemsCallback: HomeComponent.overlapEvent,
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0, isNavigation: 'Table Overview', path: "/overview"},
      {cols: 2, rows: 1, y: 4, x: 0, isNavigation: 'Context Overview', path: "/context"},
      {cols: 2, rows: 4, y: 1, x: 5, isViz: true},
      {cols: 3, rows: 3, y: 2, x: 2, isTable: true, tableData: null},
      {cols: 2, rows: 2, y: 0, x: 2, hasContent: true},
      {cols: 2, rows: 2, y: 2, x: 0, maxItemRows: 2, maxItemCols: 2, label: "Max rows & cols = 2"},
      {cols: 2, rows: 1, y: 0, x: 4, dragEnabled: true, resizeEnabled: true, label: "Drag&Resize Enabled"},
      {cols: 1, rows: 1, y: 0, x: 6, dragEnabled: false, resizeEnabled: false, label: "Drag&Resize Disabled"},
    ];
  }

  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event: MouseEvent | TouchEvent, item): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(): void {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }


}
