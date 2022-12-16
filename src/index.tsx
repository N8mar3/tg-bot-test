import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App'

const rot = document.getElementById('root')!;
const root = createRoot(rot);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

