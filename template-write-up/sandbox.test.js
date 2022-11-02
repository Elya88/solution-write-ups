/* eslint-disable linebreak-style */
const message = 'please enter a number';
const addUp = (num) => {
  if (num === '' || num === ' ' || num.isNaN) {
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
  it('Add up all the numbers from 1 to the number you passed to the function', () => {
    const num = 4;
    expect(addUp(num)).toEqual(10);
  });
  it('Add up all the numbers from 1 ', () => {
    const num = 13;
    expect(addUp(num)).toEqual(91);
  });
  it('Add up all the number from 1', () => {
    const num = 600;
    expect(addUp(num)).toEqual(180300);
  });
  it('Add up all the numbers from', () => {
    const num = '';
    expect(addUp(num)).toEqual(message);
  });

  it('Add up all the numbers from', () => {
    const num = ' ';
    expect(addUp(num)).toEqual(message);
  });

  it('return confirm to user to enter a number', () => {
    const num = 'a';
    expect(addUp(num)).toEqual(message);
  });
});
