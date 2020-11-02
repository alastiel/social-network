import React from 'react';
import './App.css';
import Navigation from './components/Navigation_bar/Navigation';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navigation/>
                <div className='app-wrapper-content'>
                   {/* в роуте добавлен дополнительный параметр :userID, знак вопроса означает что он не обязательный*/}
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer
                        store={props.store}
                    />}/>
                    <Route path='/Dialogs' render={() => <DialogsContainer
                        store={props.store}
                    />}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                    <Route path='/Login' render={() => <LoginPage/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
