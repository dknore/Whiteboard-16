'use strict';

function theaterSeating(seat, row, col) {
  let block = 0;
  for(let i = row; i < seat.length; i++) {
    let person = convertInches(seat[row][col]);
    let other = convertInches(seat[i][col]);
    if(person > other) {
      block += 1;
    }
  }
  return block;
}

function convertInches(str) {
  if(str.includes('feet')) {
    let feet = str.split(' ')[0] * 2;
    let inches = (parseInt(feet) * 12) + str.split(' ')[2];
    return inches;
  }
  return str.split(' ')[0];
}

