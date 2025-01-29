import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import './Styles/App.css';
import { setupBackToTopButton } from './Scripts/utils';

function App() {
  useEffect(() => {
    setupBackToTopButton();
  }, []);
  
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
