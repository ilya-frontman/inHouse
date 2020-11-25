'use strict';

const tel = document.querySelector('.phone');
const user = document.querySelector('.username');
const width = document.querySelector('.width');
const height = document.querySelector('.height');
const number = document.querySelector('.number');

const phone_mask = Maska.create(tel, {
  mask: '+7 (###) ### ## ##'
});

const user_mask = Maska.create(user, {
  tokens: { 'Z': { pattern: /[а-яА-Яa-zA-Z]/ }},
  mask: 'Z* Z* Z*'
});


const width_mask = Maska.create(width, {
  tokens: { '#': { pattern: /[0-9]/ }},
  mask: '["# ш. см", "## ш. см", "### ш. см", "#### ш. см"]'
});

const height_mask = Maska.create(height, {
  tokens: { '#': { pattern: /[0-9]/ }},
  mask: '["# в. см", "## в. см", "### в. см", "#### в. см"]'
});

const number_mask = Maska.create(number, {
  tokens: { '#': { pattern: /[0-9]/ }},
  mask: '["# шт", "## шт", "### шт", "#### шт"]'
});
