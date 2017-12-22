import React from 'react';
import './MiddleBlock.css';
import CreateTweet from './CreateTweet.jsx';
// import NewsTaps from './NewsTap.jsx';

export default class MiddleBlock extends React.Component{
    render(){
        return(
            <div className="middle__block--container">
                <CreateTweet />
                
            </div>
        )
    }
}
