import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EchartsComponent } from '../../pages/charts/echarts/echarts.component';
import { EchartsPieComponent } from '../../pages/charts/echarts/echarts-pie.component';
import { StatisticsComponent } from './statistics.component'


@NgModule({
  declarations: [EchartsComponent, EchartsPieComponent],
  imports: [
    CommonModule,
    NgxEchartsModule,
  ],
  bootstrap: [StatisticsComponent]
})
export class StatisticsModule { }
