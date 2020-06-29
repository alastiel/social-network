import React from 'react';
import './App.css';
import Header from './components/Header'
import Navigation from './components/Navigation';
import ProfileComponent from './components/ProfileComponent';






const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <ProfileComponent />
    </div >
  );
}


export default App;
