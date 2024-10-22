import React from 'react';
import Header from './components/Header';
import Global from './styles/Global';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Footer/>
      <Global/>
    </div>
  );
}

export default App;
