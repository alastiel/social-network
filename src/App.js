import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navigation from './components/Navigation_bar/Navigation';
import ProfileComponent from './components/Profile/ProfileComponent';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Route path='/ProfileComponent' render={() => <ProfileComponent
                        store={props.store}
                    />}/>
                    <Route path='/Dialogs' render={() => <DialogsContainer
                        store={props.store}
                    />}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
