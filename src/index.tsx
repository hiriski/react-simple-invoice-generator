import { StrictMode } from 'react';

// React DOM.
import ReactDOM from 'react-dom';

// Components.
import App from './app';

// Global styles.
import '@/styles/styles.scss';

// React redux provider.
import { ReduxProvider } from './providers';

ReactDOM.render(
  <StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </StrictMode>,
  document.getElementById('root'),
);
