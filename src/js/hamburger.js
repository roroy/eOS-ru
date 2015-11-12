$( document ).ready(function() {
  var hamburger = $('.hamburger-icon');
  var navigation = $('.header__navigation')
  hamburger.click(function() {
     hamburger.toggleClass('active');
     navigation.toggleClass('active');
     return false;
  });
});