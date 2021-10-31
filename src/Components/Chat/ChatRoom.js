import React, { useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import MessageForm from './MessageForm';
import app from "../../firebase";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import '../../pages/Pages.css';

const auth = getAuth(); // Authorization component
const db = getFirestore(app); // Firestore database

const msgLstStyle = {
  "padding-bottom": "50px",
  "position": "fixed",
  "height": "100%",
  "width": "81%",
  "overflow-y": "scroll"
}

function GetChatMessages(groupSessionID) {
    console.log(auth.currentUser.uid);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const messagesRef = collection(db, 'messages', groupSessionID, 'chat');
        const messagesQuery = query(messagesRef, orderBy('createdAt'), limit(25))
        const unsubscribe = onSnapshot(messagesQuery, querySnapshot => {
            let messages = [];
            querySnapshot.forEach(doc => {
                messages.push(doc.data());
            })
            setMessages(messages)
        })
        return () => unsubscribe;
      }, [])
    
    return messages;
}

function MessageList({ groupSessionID }) {
    const messages = GetChatMessages(groupSessionID);
    return <div style={msgLstStyle}>
                {messages.length ? messages.map((message, i) => <ChatMessage key={i} message={message} currUser={auth.currentUser.uid} />) : null}
           </div>
}

const ChatRoom = ({ groupSessionID, groupSessionTitle }) => {
  // console.log("groupSessionID: ", groupSessionID);
  // console.log("groupSessionTitle: ", groupSessionTitle);
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");

  return <div className="messages-container Page">
            <div>
              <MessageList groupSessionID={groupSessionID} />
            </div>
            <div>
              <MessageForm groupSessionID={groupSessionID} />
            </div>
          </div>
}

export default ChatRoom;