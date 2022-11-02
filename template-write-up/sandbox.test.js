function addUp(num) {

  if ( num ==="" || num === " " || isNaN(num) ){
    return "please enter a number";
    
  } else {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum; 
  }

}

describe("Add up the Numbers from a Single Number ", () => {
  it("Add up all the numbers from 1 to the number you passed to the function", () => {
    let num = 4;
      expect(addUp(num)).toEqual(10);
  })
  it("Add up all the numbers from 1 ", () => {
    let num = 13;
       expect(addUp(num)).toEqual(91);
  })
  it("Add up all the number from 1", () => {
    let num = 600;
     expect(addUp(num)).toEqual(180300)
  })
  it("Add up all the numbers from", () => {
    let num = "";
       expect(addUp(num)).toEqual("please enter a number");
  })

  it("Add up all the numbers from", () => {
    let num = " ";
       expect(addUp(num)).toEqual("please enter a number");
  })

  it("return confirm to user to enter a number", () => {
    let num = "a";
      expect(addUp(num)).toEqual("please enter a number");
  })
});