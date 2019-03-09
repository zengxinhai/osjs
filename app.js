/*
Aim of this practice:
1. Autoupdate the page when I change the corresponding variables in the code
2. The mark attribute would be data.
*/

zxh.register('time');

var refreshNameInterval = setInterval(function(i) {
  zxh.setState('time', Date.now());
}, 1000);

setTimeout(function() {
  clearInterval(refreshNameInterval);
}, 10000);