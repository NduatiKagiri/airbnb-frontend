import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';
import './index.css';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(


  <ProSidebarProvider>
<App/>
    </ProSidebarProvider>
);
