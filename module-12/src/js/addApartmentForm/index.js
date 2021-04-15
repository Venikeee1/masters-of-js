class Form {
  constructor(selector, options = {}) {
    const { onSubmit } = options;
    this.element = document.querySelector(selector);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSubmit = onSubmit ? onSubmit : () => {};
    this.init();
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = {};
    const formData = new FormData(this.element);

    formData.forEach((value, name) => {
      data[name] = value.trim();
    });

    this.onSubmit(data);
  }

  init() {
    this.element.addEventListener('submit', this.handleSubmit);
  }
}

export default Form;
