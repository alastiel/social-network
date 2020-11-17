import React from "react"
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <div>
            {!this.state.editMode &&
                <div className={s.activeStatus}>
                    <span onClick={this.activateEditMode} > {this.props.status || 'no status'}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input  onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} className={s.status}
                            value={this.state.status}/>
                </div>
            }
        </div>
    }
}

export default ProfileStatus;