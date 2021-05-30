import React, { useState, useEffect } from "react";
import "./App.css";
import { InputLabel, Input, FormControl } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // useState = variable in REACT
  // useEffect = run code on a condition in React

  useEffect(() => {
    // run once when the app cmponent loads

    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    //run code here....
    // if its blank inside [], this code runs ONCE when the app component leads
    //const username = prompt('Please Enter Your Name');
    setUsername(prompt("Please Enter Your Name"));
  }, []); //condition

  const sendMessage = (event) => {
    // all the logic to send a message goes
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://trello-attachments.s3.amazonaws.com/5eef9a3926cbb9029939565b/5f4257db385e5c34457cb062/02ca1a63f115aab4b65b21b5d86699d4/circle-cropped_(1).png"
        className="logo"
      />
      <h1>Welcome to messenger</h1>
      <h1>Work in progress!!</h1>
      <h2>welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message... "
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))

          /*35:01*/
        }
      </FlipMove>

      {/*input field */}
      {/*Button*/}

      {/*messages themselves */}
    </div>
  );
}

export default App;
