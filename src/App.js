import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navigation from './components/Navigation_bar/Navigation';
import ProfileComponent from './components/Profile/ProfileComponent';






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
