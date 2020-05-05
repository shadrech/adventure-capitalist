import { State as BusinessesState } from './state/Businesses/hook/reducer';

type Namespace = 'BALANCE' | 'BUSINESSES' | 'MANAGERS' | 'LOGGEDOUT';

class AppCache {

  constructor() {
    window.addEventListener('unload', () => {
      localStorage.setItem('LOGGEDOUT', JSON.stringify(Date.now()));
    }, false)
  }

  setItem(namespace: Namespace, data: any) {
    localStorage.setItem(namespace, JSON.stringify(data));
  }

  getItem<T>(namespace: Namespace): T {
    const data = localStorage.getItem(namespace);
    return data ? JSON.parse(data) : null;
  }

  calculateEarningsSinceLogout() {
    const now = Date.now();
    const purchases = Object.values(this.getItem<BusinessesState>('BUSINESSES') || {})
      .filter(({ hasManager, quantityPurchased }) => quantityPurchased && hasManager);
    const loggedOut = this.getItem<number>('LOGGEDOUT');
    const elapsedSeconds = (now - loggedOut) / 1000;
    const earnings = purchases.reduce((prev, curr) => {
      const units = elapsedSeconds / curr.timeTaken;
      return prev + (units * curr.profit);
    }, 0);

    return earnings;
  }

}

export const appCache = new AppCache();
