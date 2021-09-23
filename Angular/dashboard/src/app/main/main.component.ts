import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements AfterViewInit {
  canvas: any;
  ctx: any;
  constructor() {}

  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let mychart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['Car', 'Bike', 'Bicycle'],
        datasets: [
          {
            label: '# of Sales 2021',
            data: [100, 250, 140],
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 5,
          },
          {
            label: '# of Sales 2020',
            data: [90, 150, 30],
            borderColor: 'rgb(156, 000, 192)',
            borderWidth: 5,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }
}
