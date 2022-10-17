import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "./Themes/defaultTheme";
import "./App.css";
import "./reset.css";
import HomePage from "./Pages/HomePage/HomePage";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
