/*var navMain = document.querySelector('.page-header__nav');
var navToggle = document.querySelector('.page-header__toggler');

navMain.classList.add('page-header__nav--closed');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('page-header__nav--closed')) {
        navMain.classList.add('page-header__nav--opened');
        navMain.classList.remove('page-header__nav--closed');
    } else {
        navMain.classList.add('page-header__nav--closed');
        navMain.classList.remove('page-header__nav--opened');
    }
});*/


let temperature = 20;
let isRaining = true;
let minutes = 0;


if (!isRaining && temperature >= 10 && temperature < 15) {
  minutes = 30;
  } if (!isRaining && temperature >= 15 && temperature < 25) {
    minutes = 40;
    } if (!isRaining && temperature >= 25 && temperature < 35) {
      minutes = 20;
      } else {
        minutes;
        }
        
console.log('minutes');