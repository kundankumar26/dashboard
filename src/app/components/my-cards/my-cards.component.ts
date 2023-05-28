import { Component } from '@angular/core';

const ELEMENT_DATA = [
  {Currency: 'USD/US Dollar', Status: 'Active'}
];

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.scss']
})
export class MyCardsComponent {
  displayedColumns: string[] = ['Currency', 'Status'];
  dataSource = ELEMENT_DATA;
}
