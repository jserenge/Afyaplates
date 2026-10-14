export const formatKES = (amount:number) => new Intl.NumberFormat('en-KE',{style:'currency',currency:'KES',maximumFractionDigits:0}).format(amount);
export const cx = (...values:(string|false|undefined)[]) => values.filter(Boolean).join(' ');
