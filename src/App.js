import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navigation from './components/Navigation_bar/Navigation';
import ProfileComponent from './components/Profile/ProfileComponent';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/ProfileComponent' component={ProfileComponent}/>*/}
                    {/*<Route path='/Dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/News' component={News}/>*/}
                    {/*<Route path='/Music' component={Music}/>*/}
                    {/*<Route path='/Settings' component={Settings}/>*/}

                    <Route path='/ProfileComponent' render={() => <ProfileComponent
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/Dialogs' render={() => <Dialogs state={props.state.messagePage}/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
