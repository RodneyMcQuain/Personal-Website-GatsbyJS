import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/popper.js';
import 'font-awesome/css/font-awesome.min.css'; 

if (typeof window !== 'undefined') {
    window.jQuery = window.$ = require('jquery');
    require('bootstrap');
}