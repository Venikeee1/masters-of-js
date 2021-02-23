const containerRef = document.querySelector('.container');
const linkListRef = document.querySelector('.list');

const contactUsRef = linkListRef.querySelector('.contact-link');
const listItemsRef = Array.from(linkListRef.querySelectorAll('li'));

// const t0 = performance.now();

// linkListRef.style.backgroundColor = 'purple';

// linkListRef.style.color = '#fff';
// for (let i = 0; i < 1000000000; i += 1) {
//   const a = 5;
// }

// linkListRef.style.backgroundColor = 'green';

// const t1 = performance.now();
// console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');
// linkListRef.setAttribute('hidden', true);

const btnRef = document.querySelector('.btn');
const imgRef = document.querySelector('.preview');

const setImgData = (imgNode) => {
  console.log(imgNode.dataset);
  const { src, alt } = imgNode.dataset;

  imgNode.src = src;
  imgNode.alt = alt;
  imgNode.removeAttribute('data-src');
  imgNode.removeAttribute('data-alt');
};

btnRef.addEventListener('click', () => {
  // setImgData(imgRef);
  linkListRef.classList.toggle('hidden');
});

containerRef.classList.add('hello-world', 'hello-world1');
containerRef.style['border-radius'] = '10px';

console.log(containerRef.classList.value);
