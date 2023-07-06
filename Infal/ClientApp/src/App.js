import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const TopBar = lazy(() => import('./components/TopBar'));
const SideBar = lazy(() => import('./components/SideBar'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Account = lazy(() => import('./components/Account'));

function App() {
  return (
    <>
      <Router>
        <TopBar></TopBar>
        <div className='row'>
          <div className='col-sm-1'>
            <SideBar></SideBar>
          </div>
          <div className='col-sm-11'>
            <div className='container my-1 p-3'>
              <Suspense>
                <Routes>
                  <Route path="" element={<Dashboard />} />
                  <Route path="/account" element={<Account />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
