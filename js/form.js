'use strict';

const data = ['Коттедж','Квартира','Балкон','Проект'];

const title = document.querySelector('#title');
const radioForm = document.querySelector('.radio');
const checkbox = document.querySelector('.checkbox');
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

radioForm.addEventListener("click", (e) => {
  const target = e.target.closest('.radio_item');
  const index = radio_list.findIndex((item) => target === item.elem);

  if (index != -1) {
    title.textContent = radio_list[index].title;
    radio_list[index].elem.addClass('current')
  }

});

checkbox.addEventListener( "click", (e) => {
  const target = e.target.closest('.checker');

  if (target.checked) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
});

