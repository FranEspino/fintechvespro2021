import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import LoaderAnimate from './components/Loader/LoaderAnimate';
import "./style/main.css"
const App = React.lazy(()=>import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={ <LoaderAnimate/> }>

    <App />
    </Suspense>

  </React.StrictMode>,
  document.getElementById('root')
);

