import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feed from './components/Pages/Feed/Feed';
import Profile from 'components/Pages/Profile/Porfile';
import ProfileEdit from 'components/Pages/ProfileEdit/ProfileEdit';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);