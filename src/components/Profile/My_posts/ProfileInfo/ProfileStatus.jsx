import React from "react"
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        // через setState мы перезаписываем стейт с новыми данными, если этого не делать, то UI не будет реагировать
        // на его изменения. setState работает асинхронно
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <div>
            {!this.state.editMode &&
                <div className={s.activeStatus}>
                    <span onClick={this.activateEditMode} > {this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} className={s.status} value={this.props.status}/>
                </div>
            }
        </div>
    }
}

export default ProfileStatus;