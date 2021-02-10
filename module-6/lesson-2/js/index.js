import { bubbleSort } from './helpers.js';
import Cart from './Cart.js';
import productsList from './products.js';

// const bar = [14, 12, 8, 25, 35];
// bubbleSort(bar, (a, b) => a - b);
// console.log(bar);

const cart = new Cart(productsList);
console.log(cart.getProductsIcons());
console.log(cart.getProductsName());

cart.removeProductByName('banana');
cart.incrementProductQuantity('lemon');
cart.changeProductQuantity('cherry', 10);

try {
  cart.decrementProductQuantity('cherry1');
} catch (error) {
  alert('Такого товара не существует');
}

console.log(`Total price: ${cart.getTotalPrice()}$`);

cart.showAllProducts();
