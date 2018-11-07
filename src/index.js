import $ from 'jquery';
import 'bootstrap';
import './index.scss';

$('#test').click(() => {
  $('#div').append('<p>Hey there</p>');
});
