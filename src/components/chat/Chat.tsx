import React from 'react'
import './Chat.scss'
import {ChatHeader} from './ChatHeader';

export const Chat = () => {
    return (
        <div className="chat">
            {/* chatHeader */}
            <ChatHeader />
            {/* chatMessage */}
            <div className="chatMessage"></div>
            {/* chatInput */}
            <div className="chatInput"></div>
        </div>
    )
}
