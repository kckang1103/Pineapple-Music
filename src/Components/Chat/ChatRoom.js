import React, { useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import MessageForm from './MessageForm';
import app from "../../firebase";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getFirestore, collection, where, addDoc, query, orderBy, limit, getDocs, onSnapshot, Timestamp } from "firebase/firestore";
import '../../pages/Pages.css';

let currentUser = null;

const auth = getAuth(); // Authorization component
const db = getFirestore(app); // Firestore database

const msgLstStyle = {
  "padding-bottom": "50px",
  "position": "fixed",
  "height": "100%",
  "width": "81%",
  "overflow-y": "scroll"
}

function GetChatMessages() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const messagesRef = collection(db, 'messages');
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

function MessageList() {
    const messages = GetChatMessages();
    return <div style={msgLstStyle}>
                {messages.length ? messages.map((message, i) => <ChatMessage key={i} message={message} fromUser={auth.currentUser.uid} />) : null}
           </div>
}

const ChatRoom = () => {
  const [users, setUsers] = useState([])
  const [text, setText] = useState("");

  return <div className="messages-container Page">
            <div>
              <MessageList />
            </div>
            <div>
              <MessageForm />
            </div>
          </div>
}

export default ChatRoom;