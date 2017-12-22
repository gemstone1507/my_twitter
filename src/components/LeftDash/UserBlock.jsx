import React from 'react';
import './UserBlock.css';
import avatar from '../../img/acc__avatar.jpg';

export default class UserBlock extends React.Component {

    render() {
        return (
            <div className="user__block">
                <div className="user__cap--bg">

                </div>
                <div className="ub__user--avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="user__data">
                    <div className="user__full--name">
                        <a href="">User Full name</a>
                    </div>
                    <div className="user__login--name">
                        <a href="">@username</a>
                    </div>

                </div>
                <div className="user__activity">
                    <div className="user__activity--item">
                        <h3>Tweets</h3>
                        <p>7 304</p>
                    </div>
                    <div className="user__activity--item">
                        <h3>Follow</h3>
                        <p>130</p>
                    </div>
                    <div className="user__activity--item">
                        <h3>Followers</h3>
                        <p>1 000</p>
                    </div>
                </div>
            </div>
        )
    }
}