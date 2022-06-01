// React DOM.
import { createRoot } from 'react-dom/client';

// Components.
import App from '@/app';

// Global styles.
import '@/styles/styles.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(<App />);
