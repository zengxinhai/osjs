/*
Aim of this practice:
1. Autoupdate the page when I change the corresponding variables in the code
2. The mark attribute would be data.
*/
import zxh from './lib';

zxh.register('time');

const refreshNameInterval = setInterval(() => {
  zxh.setState('time', Date.now());
}, 1000);

setTimeout(() => {
  clearInterval(refreshNameInterval);
}, 10000);
