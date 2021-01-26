import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import * as Highcharts from "highcharts";
import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';
import * as _ from 'lodash';
import { TestService } from './test.service';
// declare var require: any;
// const Boost = require("highcharts/modules/boost");
// const noData = require("highcharts/modules/no-data-to-display");
// const More = require("highcharts/highcharts-more");
// Boost(Highcharts);
// noData(Highcharts);
// More(Highcharts);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public menu = [];
  public multi = [];
  public breadcrumbs = [];
  public openProjects = [];
  public stats = [];
  public testInfo: any;
  title = 'angular-test';
  chart: Chart;
  chart2: Chart;
  chart3: Chart;
  options: Options;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private testService: TestService) { }
  ngOnInit() {
    const events = this.router.events;
    console.log('events', events);
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }))
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(route => {

        const snapshot = this.router.routerState.snapshot;
        this.breadcrumbs = [];
        const url = snapshot.url;
        const routeData = route.snapshot.data;

        console.log(routeData);
        const label = routeData['breadcrumb'];
        const params = snapshot.root.params;

        this.breadcrumbs.push({
          url: url,
          label: label,
          params: params
        });
        console.log('', this.breadcrumbs);
      });
    this.menu = [
      {
        name: 'Dashboard',
        url: 'dashboard',
        icon: 'fa fa-tachometer',
        subTitle: 'Main'
      },
      {
        name: 'Apps',
        url: 'apps',
        icon: 'fa fa-th',
        count: 6,
        childs: [
          {
            name: 'Apps1',
            url: 'apps1',
          }
        ]
      },
      {
        name: 'Layouts',
        url: 'layouts',
        icon: 'fa fa-th-large',
        childs: [
          {
            name: 'Layouts1',
            url: 'layouts1',
          }
        ]
      },
      {
        name: 'Widgets',
        url: 'widgets',
        icon: 'fa fa-square'
      },
      {
        name: 'UI Kit',
        url: 'ui-kit',
        subTitle: 'Components',
        icon: 'fa fa-sliders',
        childs: [
          {
            name: 'UI Kit1',
            url: 'ui-kit1',
          }
        ],
        kitCount: 8
      },
      {
        name: 'Pages',
        url: 'pages',
        icon: 'fa fa-columns',
        childs: [
          {
            name: 'Pages1',
            url: 'pages1',
          }
        ],
        pagesCount: 9
      },
      {
        name: 'Form',
        url: 'form',
        icon: 'fa fa-dot-circle-o',
        childs: [
          {
            name: 'Form1',
            url: 'form',
          }
        ]
      },
      {
        name: 'Tables',
        url: 'tables',
        icon: 'fa fa-table'
      },
      {
        name: 'Charts',
        url: 'charts',
        icon: 'fa fa-bar-chart',
        status: 'New'
      },
      {
        name: 'Documents',
        url: 'documents',
        subTitle: 'Help'
      }
    ];
    this.multi = [
      {
        "name": "Germany",
        "series": [
          {
            "name": "1990",
            "value": 62000000
          },
          {
            "name": "2010",
            "value": 73000000
          },
          {
            "name": "2011",
            "value": 89400000
          }
        ]
      },

      {
        "name": "USA",
        "series": [
          {
            "name": "1990",
            "value": 250000000
          },
          {
            "name": "2010",
            "value": 309000000
          },
          {
            "name": "2011",
            "value": 311000000
          }
        ]
      },
      {
        "name": "France",
        "series": [
          {
            "name": "1990",
            "value": 58000000
          },
          {
            "name": "2010",
            "value": 50000020
          },
          {
            "name": "2011",
            "value": 58000000
          }
        ]
      },
      {
        "name": "UK",
        "series": [
          {
            "name": "1990",
            "value": 57000000
          },
          {
            "name": "2010",
            "value": 62000000
          }
        ]
      }
    ];
    this.init();
    this.init2();
    this.init3();
    this.openProjects = [
      {
        title: 'Brodcast web app mockup',
        tasks: 5,
        issues: 3
      },
      {
        title: 'Gooddesign Bootstrap 4 migration',
        tasks: 35,
        issues: 6
      },
      {
        title: '#Hashtag android app develop',
        tasks: 52,
        issues: 13
      },
      {
        title: 'Google material design application',
        tasks: 15,
        issues: 3
      },
      {
        title: 'Facebook connection web application',
        tasks: 15,
        issues: 3
      }
    ];
    this.stats = [
      {
        graph: 'assets/images/chart1.png',
        item:'App downloads',
        percentage: 40,
        level: 'up'
      },
      {
        graph: 'assets/images/chart2.png',
        item:'Social connection',
        percentage: 20,
        level: 'up'
      },
      {
        graph: 'assets/images/chart3.png',
        item:'Revenue',
        percentage: 5,
        level: 'down'
      },
      {
        graph: 'assets/images/chart4.png',
        item:'Customer increase',
        percentage: 20,
        level: 'down'
      },
      {
        graph: 'assets/images/chart5.png',
        item:'Order placed',
        percentage: 5,
        level: 'down'
      }
    ];
    this.getTestData();
  }
  getTestData() {
    this.testService.getTestAPI().subscribe((res)=>{
      if(res) {
        console.log('res', res);
        this.testInfo = res; 
      }
    })
  }
  init() {
    this.options = {
      chart: {
        type: 'area',
        height: '300px'
      },
      colors: ['#a88bdf', '#0dc3aa', '#fcc200'],
      title: {
        text: 'Month Day'
      },
      credits: {
        enabled: false
      },
      legend:{
        enabled: false
      },
      plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 0.5,
            marker: {
                lineWidth: 0.5,
                lineColor: '#666666'
            }
        }
    },
      series: [{
        name: 'Month',
        type: undefined,
        data: [
          {
            id: 1,
            name: 'raja',
            y: 1
          },
          {
            id: 2,
            name: 'raja1',
            y: 1.2
          },
          {
            id: 3,
            name: 'raja2',
            y: 1.4
          },
          {
            id: 4,
            name: 'raja3',
            y: 1.3
          },
          {
            id: 5,
            name: 'raja4',
            y: 1.2
          },
          {
            id: 6,
            name: 'raja5',
            y: 1
          }
        ]
      },
      {
        name: "Day",
        type: undefined,
        data: [
          {
            id: 11,
            name: 'hari',
            y: 1
          },
          {
            id: 21,
            name: 'hari1',
            y: 1.1
          },
          {
            id: 21,
            name: 'hari2',
            y: 1.3
          },
          {
            id: 21,
            name: 'hari3',
            y: 1.2
          },
          {
            id: 21,
            name: 'hari4',
            y: 1.1
          },
          {
            id: 21,
            name: 'hari5',
            y: 1
          }
      ]
      },
      {
        name: "Day",
        type: undefined,
        data: [
          {
            id: 11,
            name: 'yash',
            y: 1
          },
          {
            id: 21,
            name: 'yash1',
            y: 1.3
          },
          {
            id: 21,
            name: 'yash2',
            y: 1.2
          },
          {
            id: 21,
            name: 'yash3',
            y: 1
          },
          {
            id: 21,
            name: 'yash4',
            y: 1.4
          },
          {
            id: 21,
            name: 'yash5',
            y: 1.2
          }
      ]
      }
    ]
    };
    let chart = new Chart(this.options);
    // chart.addPoint(4);
    this.chart = chart;
    // chart.addPoint(5);
    // setTimeout(() => {
    //   chart.addPoint(6);
    // }, 2000);
  }
  init2() {
    this.options = {
      chart: {
        type: 'column',
        height: '300px'
      },
      colors: ['#b397e1'],
      legend:{
        enabled: false
      },
      title: {
        text: 'This month This week'
      },
      credits: {
        enabled: false
      },
      series: [
        {
        name: 'Month',
        type: undefined,
        data: [
          {
            id: 1,
            name: 'raja',
            y: 1200
          }
        ]
      },
      {
        name: "Week1",
        type: undefined,
        data: [
          {
            id: 11,
            name: 'hari',
            y: 2300
          }
        ]
      },
      {
        name: "Week2",
        type: undefined,
        data: [
          {
            id: 11,
            name: 'hari',
            y: 2300
          }
        ]
      },
      {
        name: "Week3",
        type: undefined,
        data: [
          {
            id: 21,
            name: 'hari5',
            y: 1200
          }
        ]
      },
      {
        name: "Week4",
        type: undefined,
        data: [
          {
            id: 31,
            name: 'hari6',
            y: 1000
          }
        ]
      },
      {
        name: "Week5",
        type: undefined,
        data: [
          {
            id: 31,
            name: 'hari7',
            y: 500
          }
        ]
      }
    ]
    };
    let chart = new Chart(this.options);
    // chart.addPoint(4);
    this.chart2 = chart;
    // chart.addPoint(5);
    // setTimeout(() => {
    //   chart.addPoint(6);
    // }, 2000);
  }
  init3() {
    this.options = {
      chart: {
        type: 'bar',
        height: '300px'
      },
      legend:{
        enabled: false
      },
      colors: ['#35c3b7'],
      title: {
        text: 'Market Referral'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Market',
        type: undefined,
        data: [
          {
            id: 1,
            name: 'raja',
            y: 1200
          }
        ]
      },
      {
        name: "Referal",
        type: undefined,
        data: [
          {
            id: 11,
            name: 'hari',
            y: 2300
          }
      ]
      },
      {
        name: "Referal",
        type: undefined,
        data: [
          {
            id: 11,
            name: 'hari',
            y: 300
          }
      ]
      },
      {
        name: "Referal",
        type: undefined,
        data: [
          {
            id: 11,
            name: 'hari',
            y: 1300
          }
      ]
      },
      {
        name: "Referal",
        type: undefined,
        data: [
          {
            id: 11,
            name: 'hari',
            y: 800
          }
      ]
      },
      
    ]
    };
    let chart = new Chart(this.options);
    // chart.addPoint(4);
    this.chart3 = chart;
    // chart.addPoint(5);
    // setTimeout(() => {
    //   chart.addPoint(6);
    // }, 2000);
  }
  logout() {
    localStorage.removeItem('userDetails');
    this.router.navigate(['login']);
  }
}
