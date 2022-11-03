/* eslint-disable linebreak-style */

/**
 * message to show in case the user didn't use correct input type
 * @type {string}
 */
const message = 'please enter a number';

/**
 * Add up the Numbers from a Single Number
 * @param {Number} num - The number we want to add up to
 * @returns {number|string} The total add up number or a message
 */
const addUp = (num) => {
  if (num === '' || num === ' ' || isNaN(num)) {
    return message;
  } else {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
};

describe('Add up the Numbers from a Single Number ', () => {
  it('Add up all the numbers from 1 to the number 4', () => {
    const num = 4;
    expect(addUp(num)).toEqual(10);
  });
  it('Add up all the numbers from 1 to the number 13', () => {
    const num = 13;
    expect(addUp(num)).toEqual(91);
  });
  it('Add up all the numbers from 1 to the number 600', () => {
    const num = 600;
    expect(addUp(num)).toEqual(180300);
  });
  it('use empty string', () => {
    const num = '';
    expect(addUp(num)).toEqual(message);
  });

  it('use empty space', () => {
    const num = ' ';
    expect(addUp(num)).toEqual(message);
  });

  it('use letters', () => {
    const num = 'a';
    expect(addUp(num)).toEqual(message);
  });
});
