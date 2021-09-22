import React from 'react';
import './Main.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>

        </BrowserRouter>
    )

}

export default App;
