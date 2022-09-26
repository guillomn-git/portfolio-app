import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './Views/Home/HomePage';
import PortfolioPage from './Views/Portfolio/PortfolioPage';
import LoginPage from './Views/Login/LoginPage';
import NavBar from './Components/Layout/NavBar';

function AppRouter() {
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar/>}>

                    <Route index element={
                        <HomePage />
                    }/>

                    <Route path="portfolio" element={
                        <PortfolioPage/>
                    }/>
                
                    <Route path="login" element={
                        <LoginPage/>
                    }/>
                    
                    <Route
                        path="*"
                        element={<HomePage/>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;