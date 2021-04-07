// const timeOut = setTimeout(() => {
//   alert('Subscribe');
// }, 3000);

// clearTimeout(timeOut);

// let index = 0;
// const interval = setInterval(() => {
//   if (index >= 5) {
//     clearInterval(interval);
//     return;
//   }

//   console.log((index += 1));
// }, 1000);

const dateBefore = performance.now();

let a = 0;
for (let i = 0; i < 1000000; i++) {
  a += 1;
}
const dateAfter = performance.now();

console.log(dateAfter - dateBefore);
