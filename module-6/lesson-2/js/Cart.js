class Cart {
  constructor(products = []) {
    this.products = products;
  }

  addProduct(product) {
    this.products = [...this.products, product];
  }

  removeProductByName(name) {
    this.products = this.products.filter((product) => product.name !== name);
  }

  getTotalPrice() {
    return this.products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  }

  showAllProducts() {
    console.log(this.products);
  }

  getProductsName() {
    return this.products.map((product) => product.name);
  }

  getProductsIcons() {
    return this.products.map((product) => product.icon);
  }

  #findProductByName(name) {
    const product = this.products.find((product) => product.name === name);
    if (!product) {
      console.log('There is no product with such name');
      throw new Error('Product not found!!!!');
    }

    return product;
  }

  changeProductQuantity(name, value) {
    const product = this.#findProductByName(name);

    if (value > 0) {
      product.quantity = value;
    }
  }

  incrementProductQuantity(name) {
    const product = this.#findProductByName(name);
    product.quantity += 1;
  }

  decrementProductQuantity(name) {
    const product = this.#findProductByName(name);

    if (product.quantity === 1) return;

    product.quantity -= 1;
  }
}

export default Cart;
