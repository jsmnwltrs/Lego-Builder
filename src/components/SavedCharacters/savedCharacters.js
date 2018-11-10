import $ from 'jquery';
// import 'bootstrap';
// import './index.scss';

const addSavedCharacter = (characterObject) => {
  let domString = '';
  domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${characterObject.name}</h5>
    <img src="${characterObject.headImage}" alt="head">
    <img src="${characterObject.torsoImage}" alt="torso">
    <img src="${characterObject.legsImage}" alt="legs">
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
