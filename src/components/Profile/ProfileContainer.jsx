import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../Redux/ProfileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        //если нет userId то userId = 2 (в идеале ID своего профиля)
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                {/*передача всех пропсов в компоненту, с последующим их развёртыванием*/}
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
//Оборачивание ProfileContainer в withRouter позволяет читать URL и брать из него информацию для отображения нужного профиля

