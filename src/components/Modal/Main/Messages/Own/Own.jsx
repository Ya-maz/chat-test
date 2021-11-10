import React from "react";
import { Container } from "./../../../../UI/Button";
import { Time } from "./../styles";
import { MessageBlack } from "./styles";

export default function OwnMessages({ ownMessages }) {
  return (
    // блок сообщения и времени (вся строка)
    <Container flex direction="column" align="end">
      {ownMessages.map((obj) => {
        const time = new Date(obj.date);
        return (
          <Container
            flex
            key={`${obj.text}${obj.date}`}
            align="center"
            justify="flex-end"
          >
            <Time>
              {typeof obj.date === "string"
                ? obj.date
                : time.toString().slice(16, 21)}
            </Time>
            <MessageBlack flex justify="flex-end" align="center">
              <div>{obj.text}</div>
            </MessageBlack>
          </Container>
        );
      })
      }
    </Container>
  );
}
