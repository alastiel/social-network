import React from 'react';
import './App.css';
import Navigation from './components/Navigation_bar/Navigation';
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/Appreducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navigation/>
                    <div className='app-wrapper-content'>
                        {/* в роуте добавлен дополнительный параметр :userID, знак вопроса означает что он не обязательный*/}
                        <Route path='/Profile/:userId?' render={() => <ProfileContainer
                            store={this.props.store}
                        />}/>
                        <Route path='/Dialogs' render={() => <DialogsContainer
                            store={this.props.store}
                        />}/>
                        <Route path='/News' render={() => <News/>}/>
                        <Route path='/Users' render={() => <UsersContainer/>}/>
                        <Route path='/Music' render={() => <Music/>}/>
                        <Route path='/Settings' render={() => <Settings/>}/>
                        <Route path='/Login' render={() => <LoginPage/>}/>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
