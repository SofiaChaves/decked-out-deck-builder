import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className={import.meta.env.DEV ? 'debug-screens' : ''}>
            <App />
        </div>
        <Analytics />
    </React.StrictMode>
);
