const domElement = {
  events: {
    click: [() => console.log('Event first added')],
  },

  addEventListener(event, callBackFn) {
    if (this.events[event]) {
      this.events[event].push(callBackFn);
      return;
    }

    this.events[event] = [callBackFn];
  },
};

domElement.addEventListener('click', () => {
  console.log('Event first added');
});

domElement.addEventListener('click', () => {
  console.log('Event second added');
});

domElement.addEventListener('click', () => {
  console.log('Event third added');
});

domElement.addEventListener('foo', () => {
  console.log('Event foo added');
});

const title = document.querySelector('.title');

title.addEventListener('click', () => console.log('first click'));
title.addEventListener('click', () => console.log('second click'));
title.addEventListener('submit', () => console.log('submit'));
