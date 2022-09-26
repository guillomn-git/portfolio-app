import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './Views/Home/HomePage';
import PortfolioPage from './Views/Portfolio/PortfolioPage';
import LoginPage from './Views/Login/LoginPage';

function AppRouter() {
    return(

        <BrowserRouter>

            <Routes>

                <Route
                    path="*"
                    element={<Navigate to="/home" replace />}
                />
                
                <Route path="/home" element={
                    <HomePage />
                }/>
               
                <Route path="/portfolio" element={
                    <PortfolioPage/>
                }/>
            
                <Route path="/login" element={
                    <LoginPage/>
                }/>
            
            </Routes>
        
        </BrowserRouter>
    );
}

export default AppRouter;