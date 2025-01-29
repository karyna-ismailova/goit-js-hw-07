function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    box.style.borderRadius = '5px';
    boxes.push(box);
    size += 10;
  }

  boxesContainer.innerHTML = ''; 
  boxesContainer.append(...boxes);
}


function destroyBoxes() {
  boxesContainer.innerHTML = '';
}


createBtn.addEventListener('click', () => {
  const amount = parseInt(inputEl.value, 10);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Введіть число від 1 до 100!');
    return;
  }

  createBoxes(amount);
  inputEl.value = ''; 
});


destroyBtn.addEventListener('click', destroyBoxes);
