import {Redirect} from "react-router";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component{...this.props}/>
        }
    }

    let ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

    return ConnectAuthRedirectComponent;
}

/*Классовая компонента withAuthRedirect принимает вместо пропсов другую компоненту
* и при рендере добавляет к дополнительную логику   if (!this.props.isAuth) return <Redirect to={'/login'}/>
* и возвращает пришедшую компоненту оборачивая её конетейнером,
* затем создаётся ещё 1 контейнерная компонента над уже созданной и коннектится к стору через connect,
* там она получает данные из стора*/
