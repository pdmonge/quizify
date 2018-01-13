import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux stuff
import { Provider } from "react-redux";
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
