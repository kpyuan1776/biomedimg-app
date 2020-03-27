import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plotlygraph',
  templateUrl: './plotlygraph.component.html',
  styleUrls: ['./plotlygraph.component.css']
})
export class PlotlygraphComponent implements OnInit {

  public graph = {
    data: [
      {x: [1,20,30,37,43,57,70], y: [-0.2,0.03,0.2,0.32,0.27,0.21,0.14], type: 'bar', name: 'PC1' },
      {x: [ 0.        ,  1.66666667,  3.33333333,  5.        ,  6.66666667,
        8.33333333, 10.        , 11.66666667, 13.33333333, 15.        ,
       16.66666667, 18.33333333, 20.        , 21.66666667, 23.33333333,
       25.        , 26.66666667, 28.33333333, 30.        , 31.66666667,
       33.33333333, 35.        , 36.66666667, 38.33333333, 40.        ,
       41.66666667, 43.33333333, 45.        , 46.66666667, 48.33333333,
       50.        , 51.66666667, 53.33333333, 55.        , 56.66666667,
       58.33333333, 60.        , 61.66666667, 63.33333333, 65.        ,
       66.66666667, 68.33333333, 70.        , 71.66666667, 73.33333333,
       75.        , 76.66666667, 78.33333333, 80.        , 81.66666667,
       83.33333333, 85.        , 86.66666667], 
        y: [0.2061207 , 0.176144  , 0.1553309 , 0.1405606 , 0.12501445,
          0.1238553 , 0.12469055, 0.1233501 , 0.11739965, 0.1157789 ,
          0.12058735, 0.1164095 , 0.12499525, 0.1217451 , 0.1262935 ,
          0.1412132 , 0.1453434 , 0.147489  , 0.16069185, 0.1778959 ,
          0.1735165 , 0.18552485, 0.1961561 , 0.20873345, 0.2241696 ,
          0.23427575, 0.2581486 , 0.26943105, 0.28535005, 0.30441995,
          0.3313939 , 0.3541165 , 0.3562229 , 0.39519785, 0.43109735,
          0.42773425, 0.46577685, 0.5056385 , 0.50702705, 0.5380074 ,
          0.57240055, 0.6088792 , 0.62396975, 0.6344602 , 0.67468265,
          0.698599  , 0.71998565, 0.7479896 , 0.7620819 , 0.7832289 ,
          0.8058613 , 0.8182755 , 0.84126195], 
        type: 'scatter', mode: 'lines+points', marker: {color: 'orange'}, name: 'data'},
      
    ],
    layout: {width: 640, height: 480, title: 'data',
    xaxis: {
      title: {
        text: 'time',}
      }
    }
  };


  constructor() { }

  ngOnInit(): void {
  }

}
