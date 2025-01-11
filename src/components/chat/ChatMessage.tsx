
import React from 'react';
import './ChatMessage.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const ChatMessage = () => {

    return (

        <div className="message">
            <AccountCircleIcon />
            <div className="messageInfo">
                <h4>
                    Shin Code
                    <span className="messageTimestamp">2025/1/11</span>
                </h4>

                <p>メッセージ本文</p>
            </div>
        </div>

    );

};
