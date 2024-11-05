import React from 'react';
import {
    BrowserRouter, 
    Routes, 
    Route
} from "react-router-dom"
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from '../components/Footer';
import Error from "../components/Error";
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Conduta_Ambiental from '../pages/Conduta_Eixo_Ambiental';
import Conduta_Social from '../pages/Conduta_Eixo_Social';
import Conduta_Econômico from '../pages/Conduta_Eixo_Econômico';
import Desempenho from '../pages/Desempenho'; 

const RouterApp = () => {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/condutaEconomico" element={<Conduta_Econômico/>} />
            <Route path="/condutaSocial" element={<Conduta_Social/>} />
            <Route path="/condutaAmbiental" element={<Conduta_Ambiental/>} />
            <Route path="/desempenho" element={<Desempenho />} />
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </BrowserRouter>

  );
};

export default RouterApp;