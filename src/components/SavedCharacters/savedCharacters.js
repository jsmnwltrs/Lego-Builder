import $ from 'jquery';
import 'bootstrap';
import '../../index.scss';
import './savedCharacters.scss';


const addSavedCharacter = (characterObject) => {
  let domString = '';
  domString += `<div class="card" style="width: 18rem;">
  <div class="card-title">
  <h3 class="card-title">${characterObject.name}</h3>
  </div>
  <div class="card-body">
    <img class="savedHead" src="${characterObject.headImage}" alt="head">
  </div>
  <div class="card-body">
    <img class="savedTorso" src="${characterObject.torsoImage}" alt="torso">
  </div>
  <div class="card-body">
    <img class="savedLegs" src="${characterObject.legsImage}" alt="legs">
 </div>
</div>`;
  $('#savedCharacters').append(domString);
};

const saveCharacterObject = {
  name: '',
  headImage: '',
  torsoImage: '',
  legsImage: '',
};


const getDivData = () => {
  const headName = $('#headName').html();
  const torsoName = $('#torsoName').html();
  const legsName = $('#legsName').html();
  const saveName = `${headName}${torsoName}${legsName}`;
  const headImage = $('.head').attr('src');
  const torsoImage = $('.torso').attr('src');
  const legsImage = $('.legs').attr('src');
  saveCharacterObject.name = saveName;
  saveCharacterObject.headImage = headImage;
  saveCharacterObject.torsoImage = torsoImage;
  saveCharacterObject.legsImage = legsImage;
};


const saveEvent = () => {
  $('#save').click(() => {
    getDivData();
    addSavedCharacter(saveCharacterObject);
  });
};

export default { saveEvent };
