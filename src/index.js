import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

//imports Bootstrap and CSS
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import './index.css';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
