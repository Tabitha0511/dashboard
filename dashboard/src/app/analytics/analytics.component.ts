import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../service/app.service';
import axios from 'axios';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  title: any;
  analytics: any;
  text: boolean = false;
  baseURL: string = 'http://api.scb.se/OV0104/v1/doris/en/ssd';
  content: any;
  icon: string[] = [
    'h-fin',
    'p&c',
    'trade',
    'p-fin',
    'fm',
    'business',
    'energy',
    'na',
    'hcb',
    'environment',
    'population',
    'democracy',
    'lm',
    'lc',
    'er',
    'gs',
    'aff',
    'tc',
  ];
  constructor(private router: Router, private as: AppService) {}

  ngOnInit(): void {
    axios.get(this.baseURL).then((res) => {
      this.content = res.data;
      for (let i = 0; i <= this.content.length; i++) {
        this.content[i].icon = `../../assets/${this.icon[i]}.svg`;
      }
      // this.content[0].icon = '../../assets/h-fin.svg';
    });
    console.log(this.content);
  }
  selectStatistics(id: any) {
    this.text = true;
    this.title = id;
  }
}
