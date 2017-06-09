import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { initIziToast } from 'helpers'

initIziToast() // just setting the default style for iziToast

ReactDOM.render( <Root />, document.getElementById('root') )
