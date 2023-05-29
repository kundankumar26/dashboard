import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss'],
})
export class GraphsComponent implements OnInit {
  public chart: any;
  public pieChart: any;

  ngOnInit(): void {
    Chart.register(...registerables);
    this.createChart();
  }
  createChart() {
    this.chart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['01', '05', '10', '15', '20', '25', '30'],
        datasets: [
          {
            label: 'Outcome',
            data: [
              '180',
              '342.02',
              '176.08',
              '181.06',
              '97.21',
              '198.78',
              '89.67',
            ],
            backgroundColor: 'rgb(238, 115, 105, 0.05)',
            borderColor: 'rgb(238, 115, 105, 1)',
            fill: true,
            tension: 0.5,
            borderWidth: 2,
            pointRadius: 1,
            hoverBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(238, 115, 105, 1)',
            borderCapStyle: 'butt',
          },
          {
            label: 'Income',
            data: [
              '0',
              '123.00',
              '98.00',
              '146.06',
              '202.21',
              '220.78',
              '344.67',
            ],
            backgroundColor: 'rgb(83, 103, 188, 0.05)',
            borderColor: 'rgb(83, 103, 188, 1)',
            fill: true,
            tension: 0.5,
            borderWidth: 2,
            pointRadius: 1,
            hoverBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(83, 103, 188, 1)',
            borderCapStyle: 'butt',
          },
        ],
      },
      options: {
        elements: {
          point: {
            radius: 0.1,
            borderColor: 'white',
            hoverBorderWidth: 4
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 13
              },
              padding: 10
            }
          },
          y: {
            grid: {
              drawTicks: false,
              lineWidth: 2
            },
            border: {
              display: false
            },
            ticks: {
              maxTicksLimit: 5,
              font: {
                size: 13
              },
              padding: 23
            }
          }
        },
        plugins: {
          legend: {
            display: false,
            position: 'top',
            align: 'end',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              borderRadius: 1,
              font: {
                weight: 'bold'
              }
            }
          },
          tooltip: {
            enabled: false,
            position: 'nearest',
            external: function (context) {
              let tooltipEl = document.getElementById('chartjs-tooltip');

              // Create element on first render
              if (!tooltipEl) {
                tooltipEl = document.createElement('div');
                tooltipEl.id = 'chartjs-tooltip';
                tooltipEl.innerHTML = '<table></table>';
                document.body.appendChild(tooltipEl);
              }

              // Hide if no tooltip
              const tooltipModel = context.tooltip;
              if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = '0';
                return;
              }

              // Set caret Position
              tooltipEl.classList.remove('above', 'below', 'no-transform');
              if (tooltipModel.yAlign) {
                tooltipEl.classList.add(tooltipModel.yAlign);
              } else {
                tooltipEl.classList.add('no-transform');
              }

              function getBody(bodyItem: any) {
                return bodyItem.lines;
              }

              // Set Text
              if (tooltipModel.body) {
                const bodyLines = tooltipModel.body.map(getBody);

                let innerHtml = '';

                bodyLines.forEach(function (body, i) {
                  const colors = tooltipModel.labelColors[i];
                  const title = body[0].split(':')[0];
                  const value = body[0].split(':')[1];
                  const style = `color:${colors.borderColor};font-weight:500`;
                  innerHtml += '<tbody class="caret"><tr><td>' + title + '</td></tr><tr><td style="' + style + '">$' + value + '</td></tr></tbody>';
                });

                let tableRoot = tooltipEl.querySelector('table');
                if (tableRoot) {
                  tableRoot.innerHTML = innerHtml;
                }
              }

              const position = context.chart.canvas.getBoundingClientRect();

              tooltipEl.style.backgroundColor = '#ffffff';
              tooltipEl.style.borderRadius = '8px';
              tooltipEl.style.opacity = '1';
              tooltipEl.style.position = 'absolute';
              tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 10 + 'px';
              tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 30 + 'px';
              tooltipEl.style.borderColor = '#456576';
              tooltipEl.style.padding = '3px 15px';
              tooltipEl.style.pointerEvents = 'none';
              tooltipEl.style.boxShadow = 'rgba(0, 0, 0, 0.1) 2px 9px 16px 1px';
            }
          }
        }
      },
    });

    this.pieChart = new Chart('pieChart', {
      type: 'doughnut',
      data: {
        labels: ['Shopping', 'Workspace', 'Food', 'Entertainments'],
        datasets: [
          {
            label: 'Sales',
            data: ['130', '250', '250', '200'],
            backgroundColor: [
              'rgb(45, 66, 132)',
              'rgb(66, 94, 187)',
              'rgb(142, 158, 214)',
              'rgb(198, 207, 235)',
            ],
            borderWidth: 2,
            hoverBorderWidth: 2,
            rotation: -45,
            spacing: 0,
            borderAlign: 'center'
          },
        ],
      },
      options: {
        layout: {
          padding: {
            right: 30,
          }
        },
        cutout: '66%',
        radius: 80,
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              boxWidth: 25,
              boxHeight: 12,
              padding: 20,
              font: {
                size: 13
              }
            },
            position: 'right',
            align: 'center',
            fullSize: true
          }
        }
      }
    });
  }
}
