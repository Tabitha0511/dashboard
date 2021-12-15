import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  forReq = {
    query: [
      {
        code: 'Region',
        selection: {
          filter: 'item',
          values: ['00'],
        },
      },
      {
        code: 'Tid',
        selection: {
          filter: 'item',
          values: ['2016', '2017', '2018', '2019', '2020'],
        },
      },
    ],
    response: {
      format: 'json',
    },
  };
  baseURL: string = 'http://api.scb.se/OV0104/v1/doris/en/ssd/';
  constructor(private router: Router) {}
  dashboard: any;
  populationPie = [
    { name: '2016', value: 9995153 },
    { name: '2017', value: 10120242 },
    { name: '2018', value: 10230185 },
    { name: '2019', value: 10327589 },
    { name: '2020', value: 10379295 },
  ];
  populationBar = [
    { name: '2005', value: 9047752 },
    { name: '2006', value: 9113257 },
    { name: '2007', value: 9182927 },
    { name: '2008', value: 9256347 },
    { name: '2009', value: 9340682 },
    { name: '2010', value: 9415570 },
    { name: '2011', value: 9482855 },
    { name: '2012', value: 9555893 },
    { name: '2013', value: 9644864 },
    { name: '2014', value: 9747355 },
    { name: '2015', value: 9851017 },
    { name: '2016', value: 9995153 },
    { name: '2017', value: 10120242 },
    { name: '2018', value: 10230185 },
    { name: '2019', value: 10327589 },
    { name: '2020', value: 10379295 },
  ];
  axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  };

  ngOnInit(): void {
    axios
      .post(
        this.baseURL + 'BE/BE0101/BE0101A/BefolkningNy',
        this.forReq,
        this.axiosConfig
      )
      .then((v) => {
        console.log(v);
      })
      .catch((err) => console.log('Login: ', err));
  }
}
