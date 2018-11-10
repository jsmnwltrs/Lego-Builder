import $ from 'jquery';
// import 'bootstrap';
// import './index.scss';
import partsData from '../../data/partsData';


const stringBuilder = (part, divId, nameDiv) => {
  let domString = '';
  domString += `<div class='part' id='${part.id}'>
    <img src='${part.imageUrl}'>
    </div>`;
  $(divId).html(domString);
  $(nameDiv).html(`${part.name}`);
};

const loadNextHead = () => {
  partsData.getNextHead()
    .then((nextHead) => {
      stringBuilder(nextHead[0], '#head', '#headName');
    })
    .catch((error) => {
      console.error(error);
    });
};

const headEvent = () => {
  $('#head').on('click', () => {
    loadNextHead();
  });
};

const loadNextTorso = () => {
  partsData.getNextTorso()
    .then((nextTorso) => {
      stringBuilder(nextTorso[0], '#torso', '#torsoName');
    })
    .catch((error) => {
      console.error(error);
    });
};

const torsoEvent = () => {
  $('#torso').on('click', () => {
    loadNextTorso();
  });
};

const loadNextLegs = () => {
  partsData.getNextLegs()
    .then((nextLegs) => {
      stringBuilder(nextLegs[0], '#legs', '#legsName');
    })
    .catch((error) => {
      console.error(error);
    });
};

const legsEvent = () => {
  $('#legs').on('click', () => {
    loadNextLegs();
  });
};

const initialHeadDisplay = () => {
  partsData.initializeData()
    .then((data) => {
      stringBuilder(data.data.heads[0], '#head', '#headName');
    })
    .catch((error) => {
      console.error(error);
    });
};

const initialTorsoDisplay = () => {
  partsData.initializeData()
    .then((data) => {
      stringBuilder(data.data.torsos[0], '#torso', '#torsoName');
    })
    .catch((error) => {
      console.error(error);
    });
};

const initialLegsDisplay = () => {
  partsData.initializeData()
    .then((data) => {
      stringBuilder(data.data.legs[0], '#legs', '#legsName');
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

export default {
  bindDisplays, headEvent, torsoEvent, legsEvent,
};
