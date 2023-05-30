const todoList = [{
  name:'Create routine',
  dueDate: '2012-12-22'
 }, {
  name: 'Make dinner',
  dueDate: '2012-12-22'
}];
renderTodoList();

function renderTodoList() {
let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
   // const name = todoObject.name;
   // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
  <div>${name}</div>
    <div>${dueDate}</div> 
    <button class="delete-button" onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    ">Delete</button>
    `;
    todoListHTML += html;
}

document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;
}

function addTodo() {
    const inputElem = document.querySelector('.js-name-input');
    const name = inputElem.value;

    const dateInputElem = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElem.value; 

     todoList.push({
      name,
      dueDate
     });
     inputElem.value = '';
     renderTodoList();
}

/*
const nums = [10, 20, 30];
nums[2] = 99;

function getLastValue(array) {
    const lastIndex = array.length - 1;
    return array[lastIndex];
}

console.log(getLastValue(['history', 'time', 'biscuit']));
console.log(getLastValue([12, 50, 97, 65]));

function arraySwap(array) {
    const lastIndex = array.length - 1;

    const lastValue = array[lastIndex];
    const firstValue = array[0];

    array[0] = lastValue;
    array[lastIndex] = firstValue;

    return array;
  }
  console.log(arraySwap([1, 20, 22, 24, 5]));
  console.log(arraySwap(['hi', 'hello', 'hey']));
  

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let i = 0;
  while (i < numbers.length) {
    console.log(i);
    i += 2;

  }
  

  const nums = [1, 2, 3, 4, 5];
  let i = 5;
  while ( i > -1) {
    console.log(i);
    i--;
  }

  const numbers = [1, 2, 3];
 const numsAdded = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    numsAdded.push(num + 1);
  };

  function addOne(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
      result.push(array[i] + 1);
    }

    return result;
  }

console.log(addOne([3, 4, 5]));
console.log(addOne([-2, -3, 5]))
*/
/*
function timesTwo (array) {
  const multiplied = [];

  for (let i = 0; i < array.length; i++) {
    multiplied.push(array[i] * 2);
  }
  return multiplied;
}
console.log(timesTwo([3, 4, 5]));

function countPositive (nums) {
  let positiveNumbers = 0;

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] > 0) {
      positiveNumbers++;
  }
}
  return positiveNumbers;
}
console.log(countPositive([-3, 5, -1, 4, 5]));

function minMax(numbers) {

  let minimum = maximum = null; // Initialize minimum and maximum as null. 
                               // set as first value if we don't want it to show null.

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (minimum === null || num < minimum) {
      minimum = num; // Update minimum if a smaller number is found
    }
    if (maximum === null || num > maximum) {
      maximum = num; // Update maximum if a larger number is found
    }
  }

  return { minimum, maximum }; //return as object
}
console.log(minMax([]));


function countWords (words) {

  const result = {};
  for (let i = 0; i < words.length; i++) {
    const value = words[i]; 

  if (!result[value]) {
    result[value] = 1;
  } else {
    result[value]++;
  }
}
return result;
}
console.log(countWords(['ghost', 'boy', 'boy', 'ghost']));
*/