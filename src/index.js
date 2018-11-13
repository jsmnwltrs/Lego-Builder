import 'bootstrap';
import './index.scss';
import legoCharacter from './components/LegoCharacter/legoCharacter';
import saveCharacters from './components/SavedCharacters/savedCharacters';

const initializeApp = () => {
  legoCharacter.bindDisplays();
  legoCharacter.headEvent();
  legoCharacter.torsoEvent();
  legoCharacter.legsEvent();
  saveCharacters.saveEvent();
};

initializeApp();
