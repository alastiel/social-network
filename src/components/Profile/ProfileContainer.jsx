import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/ProfileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        //если нет userId то userId = 2 (в идеале ID своего профиля)
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div>
                {/*передача всех пропсов в компоненту, с последующим их развёртыванием*/}
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

//Оборачивание ProfileContainer в withRouter позволяет читать URL и брать из него информацию для отображения нужного профиля
export default connect(mapStateToProps, {getUserProfile})(withRouter(AuthRedirectComponent));
