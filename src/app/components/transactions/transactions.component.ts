import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  @Input() public transactionList: any;

  public displayedColumns: string[] = ['picture', 'name', 'company', 'date', 'time', 'balance', 'status', 'action'];
  public dataSource: any;
}
