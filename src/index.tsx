// React DOM.
import { createRoot } from 'react-dom/client';

// Components.
import App from '@/app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(<App />);
