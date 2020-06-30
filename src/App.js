import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navigation from './components/Navigation_bar/Navigation';
import ProfileComponent from './components/Profile/ProfileComponent';
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                {/*<ProfileComponent />*/}
                <Dialogs/>
            </div>
        </div>
    );
}


export default App;
