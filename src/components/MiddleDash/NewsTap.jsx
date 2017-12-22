import React from 'react';
import './NewsTap.css';
import userAvatar from '../../img/user.png';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
// import data from '../../database/data.json';






const styles = {
    block: {
        maxWidth: 50,
    },
    checkbox: {
        marginBottom: 16,
    },
};

export default class NewsTap extends React.Component {

   

    render() {
        return (
            <div>
                {/* {
                    data.users.map(function (user) { */}
                        {/* return ( */}
                            <div className="new__tap" >
                                <div className="user__logo">
                                    <img src={userAvatar} alt="" />
                                </div>
                                <div className="tweet__info">
                                    <p className="user__fullName ti__user">
                                        {this.props.fullName}
                                    </p>
                                    <p className="user__loginName ti__user">
                                        {this.props.loginName}
                                    </p>
                                    <p className="tweet__time ti__user">
                                        {this.props.time}
                                    </p>

                                </div>
                                <div className="tweet__txt">

                                    <p className="tweet__txt--des">{this.props.tweet}</p>
                                    <Checkbox
                                        checkedIcon={<ActionFavorite />}
                                        uncheckedIcon={<ActionFavoriteBorder />}
                                        style={styles.checkbox}
                                    />
                                </div>

                            </div>
                        {/* ) */}
                    {/* })
                } */}



            </div>

        )
    }

}
