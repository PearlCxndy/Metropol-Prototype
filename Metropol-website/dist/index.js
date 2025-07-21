import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
    // Start measuring performance (optional)
    reportWebVitals(() => { });
}
