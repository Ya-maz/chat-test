import React, {useRef, useEffect} from "react";
import { Container } from "./../../../UI/Button";
import { Box, Message, Nickname, Time } from "./styles.js";
import OwnMessages from "./Own/Own";
import { MessageBlack } from "./Own/styles";

export const Messages = React.forwardRef(({ messages, messagesFromServer, ownMessages, connect }, ref) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = (e) => {
    messagesEndRef.current.scrollIntoView();
  };
  useEffect(scrollToBottom, [connect, messagesFromServer, ownMessages ]);

  return (
    <Box flex direction="column" ref={ref}>

      {messagesFromServer.length === 0 ?
        messages.map(obj => (
        // блок сообщения и времени (вся строка)
        <Container flex align="center" key={`${obj.from}${obj.id}`}>
          {/* блок сообщения */}
          <Message justify="flex-start">
            {/* пользовательские данные */}
            <Container flex margin="5px">
              <img src={obj.icon} alt="icon" style={{ padding: " 0 5px" }} />
              <Nickname>{obj.from}</Nickname>
              {obj.status === "user" ? null : <img style={{ width: " 15px", height: "15px" }} src={obj.iconStatus} alt="status" />}
              <div style={{ padding: " 0 5px", color: "#23B838" }}>{obj.id}</div>
            </Container>
            {/* текст сообщения */}
            <Container flex >
              <div>{obj.text}</div>
            </Container>
          </Message>
          <Time>{obj.createdAt}</Time>
        </Container>

      ))
        
        : messagesFromServer.concat().map(obj => {
          if (obj.from !== "username") {
            return (
              // блок сообщения и времени (вся строка)
              <Container flex align="center" key={`${obj.from}${obj.id}`}>
                {/* блок сообщения */}
                <Message justify="flex-start">
                  {/* пользовательские данные */}
                  <Container flex margin="5px">
                    <Nickname>{obj.from}</Nickname>
                  </Container>
                  {/* текст сообщения */}
                  <Container flex >
                    <div>{obj.text}</div>
                  </Container>
                </Message>
                <Time>{obj.createdAt.slice(11, 16)}</Time>
              </Container>
            )
          } else {
              return (
                <Container
                  flex
                  key={`${obj.text}${obj.date}`}
                  align="center"
                  justify="flex-end"
                >
                  <Time>{obj.createdAt.slice(11, 16)}</Time>
                  <MessageBlack flex justify="flex-end" align="center">
                    <div>{obj.text}</div>
                  </MessageBlack>
                </Container>
              );
          }

        })
      }
        
      { messagesFromServer.length === 0 && <OwnMessages ownMessages={ownMessages}/>}
      <div ref={messagesEndRef} />
    </Box>
  )
})