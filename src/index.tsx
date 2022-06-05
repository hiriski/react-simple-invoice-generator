// React DOM.
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

// Components.
import App from '@/app';

// Global styles.
import '@/styles/styles.scss';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
