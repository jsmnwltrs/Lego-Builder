import $ from 'jquery';
// import 'bootstrap';
// import './index.scss';
import partsData from '../../data/partsData';


const stringBuilder = (part, divId) => {
  let domString = '';
  domString += `<div class='part' id='${part.id}'>
    <img src='${part.imageUrl}'>
    </div>`;
  $(divId).html(domString);
};

const loadNextHead = () => {
  partsData.getNextHead()
    .then((nextHead) => {
      console.log(nextHead);
      stringBuilder(nextHead[0], '#head');
    })
    .catch((error) => {
      console.error(error);
    });
};

const headEvent = () => {
  $('#head').on('click', '.part', () => {
    loadNextHead();
  });
};

const loadNextTorso = () => {
  partsData.getNextTorso()
    .then((nextTorso) => {
      console.log(nextTorso);
      stringBuilder(nextTorso[0], '#torso');
    })
    .catch((error) => {
      console.error(error);
    });
};

const torsoEvent = () => {
  $('#torso').on('click', '.part', () => {
    loadNextTorso();
  });
};

const loadNextLegs = () => {
  partsData.getNextLegs()
    .then((nextLegs) => {
      console.log(nextLegs);
      stringBuilder(nextLegs[0], '#legs');
    })
    .catch((error) => {
      console.error(error);
    });
};

const legsEvent = () => {
  $('#legs').on('click', '.part', () => {
    loadNextLegs();
  });
};

const initialHeadDisplay = () => {
  partsData.initializeData()
    .then((data) => {
      stringBuilder(data.data.heads[0], '#head');
    })
    .catch((error) => {
      console.error(error);
    });
};

const initialTorsoDisplay = () => {
  partsData.initializeData()
    .then((data) => {
      stringBuilder(data.data.torsos[0], '#torso');
    })
    .catch((error) => {
      console.error(error);
    });
};

const initialLegsDisplay = () => {
  partsData.initializeData()
    .then((data) => {
      stringBuilder(data.data.legs[0], '#legs');
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
