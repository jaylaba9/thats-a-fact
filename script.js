'use strict';

import apikey from '/config.js';

const URL = 'https://enbylyxkjeglcpatjpai.supabase.co/rest/v1/facts';
const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

const test = CATEGORIES.filter((cat) => cat.name === 'technology');
console.log(test);

const btnShareFact = document.querySelector('.btn-share');
const factForm = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

btnShareFact.addEventListener('click', () => {
  if (factForm.classList.contains('hidden')) {
    factForm.classList.remove('hidden');
    btnShareFact.innerHTML = 'close';
  } else {
    factForm.classList.add('hidden');
    btnShareFact.innerHTML = 'share a fact';
  }
});

const fetchData = async function () {
  const res = await fetch(URL, {
    headers: {
      apikey: apikey,
      authorization: `Bearer ${apikey}`,
    },
  });

  const data = await res.json();

  return data;
};
const factsArray = await fetchData();

const createFactsList = function (dataArray) {
  factsList.innerHTML = '';
  dataArray.map((fact) => {
    factsList.insertAdjacentHTML(
      'afterbegin',
      `
    <li class="fact">
      <p>
        ${fact.text}
        <a
        class="source"
        href="${fact.source}"
        target="_blank"
        >(Source)</a>
      </p>
      <span class="tag" style="background-color: ${
        CATEGORIES.find((cat) => fact.category === cat.name).color
      }"
       >${fact.category}</span>
    `
    );
  });
};

createFactsList(factsArray);
