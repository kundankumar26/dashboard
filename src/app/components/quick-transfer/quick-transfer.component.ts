import { Component } from '@angular/core';
import { IMAGE_LIST } from 'src/assets/constants/constant-values';

@Component({
  selector: 'app-quick-transfer',
  templateUrl: './quick-transfer.component.html',
  styleUrls: ['./quick-transfer.component.scss']
})
export class QuickTransferComponent {
  imageList: Array<string> = IMAGE_LIST;
}
