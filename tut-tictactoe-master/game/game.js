"use strict";

var winResizeHandler = function(){
  var w = $('.cell').width();
  $('.cell').height(w);
};

$(window).resize(winResizeHandler);

winResizeHandler();

$('.cell').click(function(){
  var i = $(this).data('i');

});

var currentStep = 0;
var showArrow = function(p){
  if (p % 2 === 0){
      $('.player1 > .arrow').removeClass('inv');
      $('.player2 > .arrow').addClass('inv');
  } else {
      $('.player1 > .arrow').addClass('inv');
      $('.player2 > .arrow').removeClass('inv');
  }
};

var winningCombos = {
  combo0: [0, 1, 2],
  combo1: [3, 4, 5],
  combo2: [6, 7, 8],
  combo3: [0, 3, 6],
  combo4: [1, 4, 7],
  combo5: [2, 5, 8],
  combo6: [0, 4, 8],
  combo7: [2, 4, 6]
};

var potentialCombos = {
  0: ['combo0', 'combo3', 'combo6'],
  1: ['combo0', 'combo4'],
  2: ['combo0', 'combo5', 'combo7'],
  3: ['combo1', 'combo3'],
  4: ['combo1', 'combo4', 'combo6', 'combo7'],
  5: ['combo1', 'combo5'],
  6: ['combo2', 'combo3', 'combo7'],
  7: ['combo2', 'combo4'],
  8: ['combo2', 'combo5', 'combo6']
};
