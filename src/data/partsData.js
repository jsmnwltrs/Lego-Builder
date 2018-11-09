// import $ from 'jquery';
import 'bootstrap';
// import './index.scss';
import axios from 'axios';

const initializeData = () => axios.get('https://api.myjson.com/bins/lwgda');

let counter = 1;

const getNextHead = () => new Promise((resolve, reject) => {
  axios.get('https://api.myjson.com/bins/lwgda')
    .then((data) => {
      counter += 1;
      if (counter === 9) {
        counter = 1;
      }
      const newId = `head${counter}`;
      const nextHead = data.data.heads.filter(head => head.id === newId);
      resolve(nextHead);
    })
    .catch((error) => {
      reject(error);
    });
});


export default { initializeData, getNextHead };
