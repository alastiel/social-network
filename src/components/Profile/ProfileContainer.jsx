import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/ProfileReducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        //если нет userId то userId = 2 (в идеале ID своего профиля)
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
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

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

//Оборачивание ProfileContainer в withRouter позволяет читать URL и брать из него информацию для отображения нужного профиля
export default connect (mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
