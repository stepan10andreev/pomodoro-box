import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';

// window.addEventListener('load', () => {
//   ReactDOM.render(<App />, document.getElementById('react_root'))
// });

const container = document.getElementById('react_root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
