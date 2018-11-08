// import $ from 'jquery';
import 'bootstrap';
// import './index.scss';
import axios from 'axios';

const initializeData = () => axios.get('https://api.myjson.com/bins/lwgda');

export default { initializeData };
