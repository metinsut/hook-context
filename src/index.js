import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalProvider } from './Context/GlobalProvider';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Root from './style/global/root';
import * as serviceWorker from './serviceWorker';

const InitApp = () => {
   return (
      <Fragment>
         <Root />
         <GlobalProvider>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </GlobalProvider>
      </Fragment>
   );
};

ReactDOM.render(<InitApp />, document.getElementById('root'));

serviceWorker.unregister();
