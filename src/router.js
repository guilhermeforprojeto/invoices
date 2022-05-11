import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Overview from './Pages/Overview'
import MyIvoices from './Pages/MyIvoices'


export default function MyRoutes() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/MyIvoices" element={<MyIvoices />} />
      </Routes>
    </BrowserRouter>


  );
}