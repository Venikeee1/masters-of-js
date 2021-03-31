import { userSettings } from './userSettings.js';

const btnRef = document.querySelector('.open-menu');
const sideBar = document.querySelector('.side-bar');

const updateSettings = userSettings.update;

const toggleSideBar = () => {
  sideBar.classList.toggle('open');
  updateSettings({ openSideBar: !userSettings.settings.openSideBar });
};

const openSideBar = () => {
  sideBar.classList.add('open');
};

btnRef.addEventListener('click', toggleSideBar);

if (userSettings.settings.openSideBar) {
  openSideBar();
}

const arr1 = [1, 2, 3];
const arr2 = [5, 1, 0];
const newArr = [...arr1, ...arr2];
const [firstVal, secondVal, ...restItems] = newArr;
// console.log(newArr, '----newArr');
// console.log(firstVal, secondVal, '---firstVal, secondVal');
// console.log(restItems, '---restItems');

const user = {
  name: 'dasda',
  age: 100,
  salary: 2000,
  email: 'asdasdsad',
};

const { email, ...restUserProps } = user;

const idList = restItems.map((item) => {
  return {
    id: item,
  };
});

const arrayMap = (arr, callBackFn) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callBackFn(arr[i]));
  }

  return result;
};

const foo = arrayMap(restItems, (item) => {
  return {
    id: item,
  };
});

const sum = (a = 0) => {
  return (b) => {
    if (!b && typeof b !== 'number') return a;

    return sum(a + b);
  };
};

const a = 5;
{
  const a = 10;
}
