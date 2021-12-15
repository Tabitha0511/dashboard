import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css'],
})
export class PopulationComponent implements OnInit {
  @ViewChild('dropdown') dropdown: ElementRef | undefined;
  data_1: any;
  data_2: any;
  data_3: any;
  toDisplay_1: any;
  toDisplay_2: any;
  text_id: any;
  @Input() title: any;
  baseURL: string = 'http://api.scb.se/OV0104/v1/doris/en/ssd/';
  constructor() {}

  ngOnInit(): void {
    axios.get(this.baseURL + this.title).then((v) => {
      this.data_1 = v.data;
      console.log(this.data_1);
    });
  }
  selectedText_1(text: any) {
    this.toDisplay_1 = text;
    this.text_id = text.id;
    console.log(this.baseURL + this.title + '/' + text.id);
    axios
      .get(this.baseURL + this.title + '/' + text.id)
      .then((v) => {
        this.data_2 = v.data;
      })
      .catch((e) => console.log(e));
  }

  selectedText_2(text: any) {
    this.toDisplay_2 = text;
    console.log(this.baseURL + this.title + '/' + this.text_id + '/' + text.id);
    axios
      .get(this.baseURL + this.title + '/' + this.text_id + '/' + text.id)
      .then((v) => {
        this.data_3 = v.data;
      })
      .catch((e) => console.log(e));
  }
}
