import { Component, Input } from '@angular/core';
import { Widget } from 'src/assets/constants/constant-values';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent {
  @Input() public widget: Widget | undefined;
}
