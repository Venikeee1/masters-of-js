const todoListRef = document.querySelector('.todo-list');

const image = document.createElement('img');
image.setAttribute('src', 'https://placeimg.com/640/480/nature');
image.src = 'https://placeimg.com/640/480/nature';

/** remove elem */
// todoListRef.remove();
// todoListRef.parentNode.removeChild(todoListRef);

/** Inner html */
// todoListRef.innerHTML = '<img src="asdas" onerror="console.log(1111111)">';

const btn = document.querySelector('.test');
btn.addEventListener('click', (event) => {
  event.stopPropagation();
  todoListRef.classList.toggle('hide');
});

const bodyClickHandler = (event) => {
  console.log(event);
};

// document.body.addEventListener('mousedown', () => console.log('mousedown'));
// document.body.addEventListener('mouseup', () => console.log('mouseup'));
document.body.addEventListener('click', bodyClickHandler);
// document.body.removeEventListener('click', bodyClickHandler);

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted');
});
