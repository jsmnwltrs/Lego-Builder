import $ from 'jquery';
// import 'bootstrap';
// import './index.scss';
import partsData from '../../data/partsData';

const getNextPart = (partId) => {
  
}

const bindEvents = (divId) => {
  $(divId).on('click', '.part', (e) => {
    const partIClicked = $(e.target).closest('.part').attr('id');
    getNextPart(partIClicked);
  });
};

const stringBuilder = (part, divId) => {
  let domString = '';
  domString += `<div class='part' id='${part.id}'>
    <img src='${part.imageUrl}'>
    </div>`;
  $(divId).html(domString);
};

const initialHeadDisplay = () => {
  partsData.initializeData()
    .then((data) => {
      stringBuilder(data.data.heads[0], '#head');
      console.log(data.data.heads);
    })
    .catch((error) => {
      console.error(error);
    });
};

const initialTorsoDisplay = () => {
  partsData.initializeData()
    .then((data) => {
      stringBuilder(data.data.torsos[0], '#torso');
      console.log(data.data.torsos);
    })
    .catch((error) => {
      console.error(error);
    });
};

const initialLegsDisplay = () => {
  partsData.initializeData()
    .then((data) => {
      stringBuilder(data.data.legs[0], '#legs');
      console.log(data.data.legs);
    })
    .catch((error) => {
      console.error(error);
    });
};

const bindDisplays = () => {
  initialHeadDisplay();
  initialLegsDisplay();
  initialTorsoDisplay();
};

export default { bindDisplays };
