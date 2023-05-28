import { Component } from '@angular/core';
import { WidgetList } from 'src/assets/constants/constant-values';

export interface Widget {
  label: string;
  value: string;
  img: string;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public widgetList: Widget[] = WidgetList;
}
