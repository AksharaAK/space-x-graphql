import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/input.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
