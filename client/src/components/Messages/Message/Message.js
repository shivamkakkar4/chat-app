import React, { useEffect } from "react";
import "./Message.css";
import ReactEmoji from "react-emoji";
// import ting from "../../../ting.mp3";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();
  // const audio = new audio({ ting });

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  // useEffect(() => {
  //   if (!isSentByCurrentUser) {
  //     const sound = new Audio(ting);
  //     sound.volume = 0.1;
  //     sound.play();
  //   }
  // }, []);

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">you</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pl-10 ">{user}</p>
    </div>
  );
};

export default Message;
