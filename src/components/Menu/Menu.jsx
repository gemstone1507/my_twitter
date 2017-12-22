import React from 'react';
import './Menu.css';


export default class CheckBox extends React.Component {

    
    render() {
        return (
            <div className="navbar">
                <div className="navbar__item">
                    <a href=""> <i class="fa fa-home" aria-hidden="true"></i> Главная</a>
                </div>
                <div className="navbar__item">
                    <a href=""><i class="fa fa-bell" aria-hidden="true"></i> Уведомление</a>
                </div>
               
                
            </div>
        )
    }
}
