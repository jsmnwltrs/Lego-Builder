// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import legoCharacter from './components/LegoCharacter/legoCharacter';

const initializeApp = () => {
  legoCharacter.bindDisplays();
  legoCharacter.headEvent();
  legoCharacter.torsoEvent();
  legoCharacter.legsEvent();
};

initializeApp();
