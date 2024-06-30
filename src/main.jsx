import React from 'react';
import {createRoot} from 'react-dom/client';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import App from './App';
import { newsSlice } from './api/newsSlice';

const root = createRoot(document.getElementById('root'));


root.render(
<ApiProvider api={newsSlice}>
  <App />
</ApiProvider>
)