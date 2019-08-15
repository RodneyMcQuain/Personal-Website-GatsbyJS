import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/popper.js';
import 'font-awesome/css/font-awesome.min.css'; 
import jQuery from 'jquery';

if (typeof window !== 'undefined') {
    window.jQuery = window.$ = require('jquery');
    require('bootstrap');
    require('bootstrap/dist/js/bootstrap.js');
}

require('prismjs/themes/prism-okaidia.css');