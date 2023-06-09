/* eslint-disable */
import _ from 'lodash';
import './style.css';

const mylist = [
  {
    description: 'Sport trainning',
    completed: false,
    index: 1,
  },
  {
    description: 'Home cleaning',
    completed: false,
    index: 2,
  },
  {
    description: 'Microverse Projects',
    completed: true,
    index: 3,
  },
  {
    description: 'Cheking Projects',
    completed: false,
    index: 4,
  },
  {
    description: 'COFEE CODING',
    completed: true,
    index: 5,
  },
];

const getmylist = () => {
  const listGroup = document.querySelector('.todo-group');
  mylist.map((item) => {
    const listElement = document.createElement('li');
    listElement.classList = 'todo-list todo-item';
    listElement.id = `${item.index}`;
    listElement.innerHTML = `
          <button type="button" class=${
  item.completed === true ? 'checked-button' : 'unchecked-button'
}>
          <i class="fa-solid fa-check"></i></button>
          <input type="text" class=${
  item.completed === true ? 'decoration' : 'undecoration'
}  value="${item.description}">
          <span class="todo-item-more"><i class="fa-solid fa-ellipsis-vertical"></i></span>
      `;
    return listGroup.appendChild(listElement);
  });
};
window.addEventListener('load', getmylist);
