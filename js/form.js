'use strict';

const data = ['Коттедж','Квартира','Балкон','Проект'];

const title = document.querySelector('#title');
const radioForm = document.querySelector('.radio');
const checkbox = document.querySelector('.checkbox');
const checker = document.querySelector('.checkbox .checker');
const submit = document.querySelector('#submit');


const radioListCreate = () => {
  const radio = document.querySelectorAll('.radio_item');

  const list = [];

  for (let i=0; i < radio.length; i++) {
    list.push(
      {
        title: data[i],
        elem: radio[i]
      }
    );
  }

  return list;
}

const radio_list = radioListCreate();

const cleanCurrent = () => {
  const index = radio_list.findIndex(({elem}) => elem.classList.contains('current'));
  radio_list[index].elem.classList.remove('current');
}


radioForm.addEventListener("click", (e) => {
  const target = e.target.closest('.radio_item');
  const index = radio_list.findIndex((item) => target === item.elem);

  if (index != -1) {
    cleanCurrent();
    title.textContent = radio_list[index].title;
    radio_list[index].elem.classList.add('current')
  }

});

checkbox.addEventListener( "click", () => {

  if (checker.checked) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }

});

submit.addEventListener("click", (e) => {
  e.preventDefault();
});

