import React from 'react';
import './CreateTweet.css';
import userAvatar from '../../img/user.png';
import RaisedButton from 'material-ui/RaisedButton';
import data from '../../database/data.json';
import NewsTap from './NewsTap.jsx';



export default class CreateTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtArea: true
        };
        
        this.changeSize = this.changeSize.bind(this);

    }
    

    changeSize() {
        this.setState({ txtArea: !this.state.txtArea });
    }
    addNewTweet() {
        data.users.push({
            "id": data.users.length + 1,
            "fullName": "User",
            "loginName": "login",
            "time": new Date().getHours() + ":" + new Date().getMinutes(),
            "tweet": "Останній раз я такий був коли мені так було"
        })


    }


    render() {
        let txtClass;
        let tweetBtnClass;

        if (this.state.txtArea) {
            txtClass = "tweet__textArea"
            tweetBtnClass = "tweet__btn--hidden"
        }
        else {
            txtClass = "tweet__textArea--active"
            tweetBtnClass = "tweet__btn"
        }
        return (
            <div>
                <div className="create__tweet--block">
                    <div className="user__avatar">
                        <img src={userAvatar} alt="" />
                    </div>
                    <textarea name="" id="" cols="30" rows="10" className={txtClass} onClick={this.changeSize} placeholder="What`s happend?"></textarea>


                    <div className={tweetBtnClass}>

                        <RaisedButton label="Tweet" primary={true} onClick={this.addNewTweet} />
                    </div>

                </div>
                
                    {
                        data.users.map((user)=>{
                            return(
                                <NewsTap
                                key={user.id}
                                fullName={user.fullName}
                                loginName={user.loginName}
                                time={user.time}
                                tweet={user.tweet}
                            />
                            )
                        })
                    }
                    
                
                
            </div>

        )
    }
}
