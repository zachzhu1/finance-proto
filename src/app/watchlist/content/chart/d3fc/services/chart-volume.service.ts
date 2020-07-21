import { Injectable } from '@angular/core';
import { ChartOptionsService } from './chart-options.service';
import * as d3 from 'd3';
const fc = require('d3fc');

@Injectable()
export class ChartVolumeService {
  private volumeContainer: any;

  constructor(private chartOptionsService: ChartOptionsService) {
  }

  init(data: any, container: any) {
    this.volumeContainer = container
      // .selectAll('g.volume')
      // .data([data])
      // .enter()
      // .append('g')
      // .attr('class', 'volume')
      // .style({
      //   position: 'absolute',
      //   top: 100,
      //   bottom: this.chartOptionsService.options.xAxisHeight,
      //   right: this.chartOptionsService.options.yAxisWidth,
      //   left: 0
      // });

    //fc.layout();
    //container.layout();
  }

  render(data: any, xScale: number) {
    const volumeScale: any = d3.scaleLinear()
      .domain([0, d3.max(data, (d: any) => {
        return Number(d.volume);
      })])
      .range([this.volumeContainer.style('height'), 0]);

    const volume: any = fc.seriesSvgBar()
      .xScale(xScale)
      .yScale(volumeScale)
      .mainValue((d: any) => {
        return d.volume;
      })
      .decorate((sel: any) => {
        sel.select('path')
          .attr('class', (d: any) => {
            return d.close <= d.open ? 'mp-svg-red' : 'mp-svg-green';
          });
      });

    this.volumeContainer
      .datum(data)
      .call(volume);
  }
}
