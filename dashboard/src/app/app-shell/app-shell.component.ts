import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css'],
})
export class AppShellComponent implements OnInit {
  dashboard: boolean = true;
  analytics: boolean = false;
  constructor(private route: Router) {}

  ngOnInit(): void {}
  showAnalytics() {
    this.analytics = true;
    this.dashboard = false;
  }
  showDashboard() {
    this.dashboard = true;
    this.analytics = false;
  }
}
