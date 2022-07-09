import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  trayOpen: boolean = false;
  fullscreen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleTray() {
    this.trayOpen = !this.trayOpen
  }

  toggleFullscreen() {
    this.fullscreen = !this.fullscreen
  }

}
