import axios from 'axios';

const initializeData = () => axios.get('https://api.myjson.com/bins/lwgda');

let headCounter = 1;

const getNextHead = () => new Promise((resolve, reject) => {
  axios.get('https://api.myjson.com/bins/lwgda')
    .then((data) => {
      headCounter += 1;
      if (headCounter === 9) {
        headCounter = 1;
      }
      const newId = `head${headCounter}`;
      const nextHead = data.data.heads.filter(head => head.id === newId);
      resolve(nextHead);
    })
    .catch((error) => {
      reject(error);
    });
});

let torsoCounter = 1;

const getNextTorso = () => new Promise((resolve, reject) => {
  axios.get('https://api.myjson.com/bins/lwgda')
    .then((data) => {
      torsoCounter += 1;
      if (torsoCounter === 9) {
        torsoCounter = 1;
      }
      const newId = `torso${torsoCounter}`;
      const nextTorso = data.data.torsos.filter(torso => torso.id === newId);
      resolve(nextTorso);
    })
    .catch((error) => {
      reject(error);
    });
});

let legsCounter = 1;

const getNextLegs = () => new Promise((resolve, reject) => {
  axios.get('https://api.myjson.com/bins/lwgda')
    .then((data) => {
      legsCounter += 1;
      if (legsCounter === 9) {
        legsCounter = 1;
      }
      const newId = `leg${legsCounter}`;
      const nextLegs = data.data.legs.filter(torso => torso.id === newId);
      resolve(nextLegs);
    })
    .catch((error) => {
      reject(error);
    });
});

export default {
  initializeData, getNextHead, getNextTorso, getNextLegs,
};
