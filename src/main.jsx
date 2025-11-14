import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Browse from './Browse.jsx';
import ClassPage from './ClubPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Browse /> */}
      <ClassPage />
    </BrowserRouter>
  </StrictMode>,
);
