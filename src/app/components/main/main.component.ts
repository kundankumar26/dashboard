import { Component, OnDestroy, OnInit } from '@angular/core';
import { BALANCE_URL, Balance, TRANSACTION_URL, Transaction, Widget, WidgetList } from 'src/assets/constants/constant-values';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  public widgetList: Widget[] = WidgetList;
  public transactionList: Transaction[] = [];

  constructor(public httpClient: HttpClient) { }

  private subscriptions: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(this.httpClient.get<Balance>(BALANCE_URL).subscribe({
      next: (balances: Balance) => {
        this.widgetList = this.widgetList.filter((widget: Widget) => {
          const key = widget.label.toLowerCase();
          // if (balances.hasOwnProperty(key) !== undefined) {
          //   widget.value = `$450.00`;
          // }
          return widget;
        });
      },
      error: (error) => {
        console.log(error);
      }
    }));
    this.subscriptions.add(this.httpClient.get<Transaction[]>(TRANSACTION_URL).subscribe({
      next: (transactions: Transaction[]) => {
        this.transactionList = transactions.map((transaction: Transaction) => {
          const dateStamp = new Date(transaction.registered);
          const date = dateStamp.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: '2-digit' });
          const time = dateStamp.toLocaleTimeString();
          return { ...transaction, date: date, time: time, picture: './assets/img/man.png', action: './assets/img/arr-dwn.png' };
        });
      },
      error: (err) => {
        console.log(err);
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
