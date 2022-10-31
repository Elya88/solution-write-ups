# [Add up the Numbers from a Single Number](https://edabit.com/challenge/4gzDuDkompAqujpRi)

Create a function that takes a number as an argument. Add up all the numbers from
 1 to the number you passed to the function. For example, if the input is 4 then
  your function should return 10 because 1 + 2 + 3 + 4 = 10.

## Syntax

> addUp(`Number`) -> `Number`

### Parameters

**Number**: `Number`

Expect any positive number between 1 and 1000

### Return Value: `Number`

Add up all the numbers from
 1 to the number you passed to the function

## Test Cases

* if the input is 4 then
  your function should return 10 because 1 + 2 + 3 + 4 = 10.
* if the input is letters the function should return "confirm to let the user
   enter number not letters".
* if the input is 0 then the function should return
  return "confirm to let the user
   enter number from 1+ ".

## Use Cases


if someone wants to know the sum of number from 1 to the number that he give to the function he can use this:

Add up the Numbers from a Single Number:

```js
const number = 4;
const result = addUp(4);
console.log(result); // 10
```


---

## Strategy

we will use for loop to sum the number from 1 to the number that the user input and
 write an if condition to check if the user enter letters,emptyspace or 0.
 the return will be alert to told him to correct his input

## Retrospective

<!--
  write any notes to help you review this exercise later, and to help others' study it.

  this might include:

  - good ideas to use later in your own code
  - less good ideas to avoid in your own code
  - new vocabulary you learned
  - the most important thing(s) you learned
  - something that you still don't understand but want to keep studying
  - something that surprised you
  - tricks you will want to remember and use later
-->

### Continue Doing

### Start Doing

### Stop Doing
