export const WidgetList = [
  {
    label: 'Balance',
    value: '$2190.19',
    img: './assets/img/wallet.png',
  },
  {
    label: 'Income',
    value: '$21.30',
    img: './assets/img/save-money.png',
  },
  {
    label: 'Savings',
    value: '$1875.10',
    img: './assets/img/money-saving.png',
  },
  {
    label: 'Expenses',
    value: '$19.112',
    img: './assets/img/dollar.png',
  },
];

export const IMAGE_LIST = [
  './assets/img/man.png',
  './assets/img/man.png',
  './assets/img/man.png',
  './assets/img/man.png',
  './assets/img/man.png',
  './assets/img/man.png',
];

export const BALANCE_URL = 'https://1.api.fy23ey01.careers.ifelsecloud.com/';

export const TRANSACTION_URL = 'https://2.api.fy23ey01.careers.ifelsecloud.com/';

export interface Widget {
  label: string;
  value: string;
  img: string;
};

export interface Balance {
  balance: string;
  income: string;
  savings: string;
  expenses: string;
};

export interface Transaction {
  guid: string;
  balance: string;
  picture: string;
  status: string;
  name: string;
  company: string;
  registered: string;
  date: string;
  time: string;
  action: string;
};
