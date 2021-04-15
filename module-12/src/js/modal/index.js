const Modal = {
  element: document.querySelector('.modal'),
  open() {
    this.element.classList.add('open');
  },
  close() {
    this.element.classList.remove('open');
  },
  addHideOnBgClick() {
    this.element.addEventListener('click', event => {
      const { target } = event;

      if (target === this.element) {
        this.close();
      }
    });
  },
};

Modal.addHideOnBgClick();

export default Modal;

// class Preloader {
//   constructor(selector) {
//     this.element = document.querySelector(selector);
//   }

//   show() {
//     this.element.classList.add('visible');
//   }
//   hide() {
//     this.element.classList.remove('visible');
//   }
//   toggle() {
//     this.element.classList.toggle('visible');
//   }
// }

// const preloader1 = new Preloader('preloader1');
// const preloader2 = new Preloader('preloader2');
// preloader1.show();
