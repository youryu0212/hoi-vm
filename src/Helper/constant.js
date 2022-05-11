const API_URL = 'http://http://sample.herokuapp.com';
export const DRINK_API = `${API_URL}/beverages`;
export const WALLET_API = `${API_URL}/money/0`;
export const INVESTMENT_API = `${API_URL}/money/1`;
export const COIN_LIST = [10000, 5000, 1000, 500, 100, 50, 10];

export const INIT_ALERT_MESSAGE = {
  chargeCash: 0,
  changeAmount: 0,
  orderTitle: '',
};

export const NAV_MENUS = [
  { id: 0, name: '자판기', path: '/' },
  { id: 1, name: '지갑', path: '/wallet' },
];
