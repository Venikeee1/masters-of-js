const cars = [
  { name: 'bmw', year: 2000 },
  { name: 'audi', year: 2000 },
  { name: 'suzuki', year: 2000 },
  { name: 'maz', year: 2000 },
];
const carsListRef = document.querySelector('.cars-list');

const carItem = ({ name, year }) => {
  const carElement = document.createElement('li');
  carElement.textContent = `Name ${name} year ${year}`;

  return carElement;
};

const renderCarList = (carsList) => {
  const carsElements = carsList.map((car) => carItem(car));
  carsListRef.append(...carsElements);
};

renderCarList(cars);
