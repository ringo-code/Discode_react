import React from 'react'
import './Chat.scss'
import {ChatHeader} from './ChatHeader';
import {ChatMessage} from './ChatMessage';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export const Chat = () => {
    return (
        <div className="chat">
            {/* chatHeader */}
            <ChatHeader />
            {/* chatMessage */}
            <div className="chatMessage">
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
            </div>
            {/* chatInput */}
            <div className="chatInput">
                <AddCircleIcon className="addCircleIcon" />
                <form action="">
                    <input type="text" placeholder='#Udemyへメッセージを送る' />
                    <button type="submit" className="chatInputButton">
                        送信
                    </button>
                </form>

                <div className="chatInputIcons">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>

        </div>
    )
}
