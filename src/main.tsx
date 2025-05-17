import './assets/styles/main.css';
import '@mantine/core/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/router';
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
