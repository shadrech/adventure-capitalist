export const priceIntl = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
export const durationIntl = new Intl.DateTimeFormat('en-GB', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
export const secondsToTime = (secs: number) => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return durationIntl.format(new Date(d.getTime() + secs * 1000));
}
export const unpurchasedIntl = new Intl.NumberFormat('en-US');
