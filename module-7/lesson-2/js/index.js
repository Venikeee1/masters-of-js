const todoListRef = document.querySelector('.todo-list');
const addBtnRef = document.querySelector('.add-item-btn');
const products = [
  { title: 'Super product1' },
  { title: 'Super product2' },
  { title: 'Super product3' },
];

// const itemFactory = (title) => {
//   return `
//         <div class="todo-item">
//           <img
//             src="https://thumbs.dreamstime.com/b/labtop-%D0%BF%D1%80%D0%B8%D0%B1%D0%BE%D1%80%D0%B0-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2-43758222.jpg"
//             alt="labtop"
//             class="todo-item__img"
//           />
//           <div class="todo-item__text">
//             <h2 class="todo-item__title">${title}</h2>
//             <button class="todo-item__delete">delete</button>
//           </div>
//         </div>
//   `;
// };

const image = () => {
  const imageElement = document.createElement('img');
  imageElement.classList.add('todo-item__img');
  imageElement.src =
    'https://thumbs.dreamstime.com/b/labtop-%D0%BF%D1%80%D0%B8%D0%B1%D0%BE%D1%80%D0%B0-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2-43758222.jpg';
  imageElement.alt = 'product';

  return imageElement;
};

const titleElement = (title) => {
  const heading = document.createElement('h2');
  heading.classList.add('todo-item__title');
  heading.textContent = title;

  return heading;
};

const button = () => {
  const button = document.createElement('button');
  button.textContent = 'delete';
  button.classList.add('todo-item__delete');

  return button;
};

const productFactory = (title) => {
  const itemCard = document.createElement('div');
  const itemText = document.createElement('div');

  itemCard.classList.add('todo-item');
  itemText.classList.add('todo-item__text');

  itemText.append(titleElement(title), button());
  itemCard.append(image(), itemText);

  return itemCard;
};

const renderProducts = (products) => {
  const productsElements = products.map((product) =>
    productFactory(product.title)
  );
  console.log(productsElements);
  todoListRef.append(...productsElements);
};

const addProduct = () => {
  const title = prompt('Insert title');
  const newProduct = productFactory(title);
  products.push({ title });

  todoListRef.insertAdjacentElement('afterbegin', newProduct);
};

renderProducts(products);

addBtnRef.addEventListener('click', addProduct);
