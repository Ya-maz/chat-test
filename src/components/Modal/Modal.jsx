import React, { useState, useReducer, useEffect, useRef } from "react";
import { getFetch } from "./../../services";
import Header from "./Header/Header";
import { Main } from "./Main/Main";
import Input from "./Foot/Input";
import { ModalFlex, FlexRow } from "./styles";
import BTC from ".//../../assets/BTC.svg";
import ADA from ".//../../assets/ADA.svg";
import Moder from "./../../assets/moderator badge.png";
import Admin from "./../../assets/admin badge.png";
import { randomize } from "./../../utils";
import { socket } from "./../../socket";

export default function Modal({ open, toggle, connect }) {
  const [activeTab, setActiveTab] = useState(0);
  const [size, setSize] = useState(false);
  const [activeLNG, setActiveLNG] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsloading] = useState(true);
  const mod = useRef(null);

  const TEXT = "LOCAL/TEXT";
  const ADD_MESSAGES = "LOCAL/ADD_MESSAGE";
  const GET_FETCH = "HTTPS/GET_FETCH";
  const GET_ISTANT = "SOCKET/GET_ISTANT";

  const reducer = (state, action) => {
    switch (action.type) {
      case TEXT:
        return { ...state, text: action.text };
      case ADD_MESSAGES:
        return {
          ...state,
          text: "",
          ownMessages: [...state.ownMessages, action.own],
        };
      case GET_FETCH:
        return {
          ...state,
          messagesFromServer:[...state.messagesFromServer, ...action.items].concat().sort(
            (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
          ),
        };
      case GET_ISTANT:
        return {
          ...state,
          messagesFromServer:[...state.messagesFromServer, ...action.message].concat().sort(
            (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
          ),
        };
      default:
        return state;
    }
  };

  const saveResultFromServer = (items) => dispatch({ type: GET_FETCH, items });
  const istantMessage = (message) => dispatch({ type: GET_ISTANT, message });

  const [state, dispatch] = useReducer(reducer, {
    ownMessages: [
      {
        text: "Сегодня идем на Германию",
        date: "10:21",
        from: "username",
      },
    ],
    text: "",
    messages: [
      {
        id: randomize(),
        from: "biven",
        text: "теперь игра закончена)))",
        createdAt: "14:25",
        status: "user",
        icon: BTC,
      },
      {
        id: randomize(),
        from: "BivOld",
        text: "Я думал, что они будут пополнятся разв н-ное время. А тут реально игра закончена",
        createdAt: "14:28",
        status: "user",
        icon: ADA,
      },
      {
        id: randomize(),
        from: "Nigativ",
        text: "Сос можно только купить",
        createdAt: "14:31",
        status: "moder",
        icon: ADA,
        iconStatus: Moder,
      },
      {
        id: randomize(),
        from: "Skylifesky",
        text: "Цена 1 сос = 0,1$ и цена не изменится",
        createdAt: "14:31",
        status: "admin",
        icon: BTC,
        isUser: false,
        iconStatus: Admin,
      },
    ],
    messagesFromServer: [],
  });

  const changeSize = () => setSize(!size);

  const handleChange = (e, value) => {
    if (e.target.localName === "button") {
      setActiveTab(value);
    }
    if (e.target.localName === "div") {
      setActiveLNG(value);
    }
  };

  const handleInputEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = e.target.value;
      if (!connect) {
        const noSpace = /^\{\{[a-z]*\s[a-z]*\}\}$/;
        if (val.length > 15 && !noSpace.test(val.slice(0, 15))) {
          const result = val.replace(/.{15}/gi, "$& ");
          dispatch({
            type: ADD_MESSAGES,
            own: { text: result, date: Date.now(), from: "username" },
          });
        } else {
          dispatch({
            type: ADD_MESSAGES,
            own: { text: e.target.value, date: Date.now(), from: "username" },
          });
        }
      }
      dispatch({type: TEXT, text: ""})
    
      socket.emit("message", {from: "username", text: val}, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("success");
        };
        })
    }
  };
  const handleInputChange = ({ target: { value } }) => {
    dispatch({ type: TEXT, text: value });
  };

  const scrollHandler = (e) => {
    if (e.target.scrollTop < 25) {
      setIsloading(true);
    }
  };

  useEffect(() => {
    mod.current.addEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    if (connect) {
      if (isLoading) {
        console.log("loading");
        getFetch(
          `https://test-chat-backend-hwads.ondigitalocean.app/api/messages?skip=${
            (25 * currentPage)
          }&limit=25`,
          saveResultFromServer,
          setIsloading,
          setCurrentPage
        );
      }
    }
  }, [connect, isLoading, currentPage]);

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message.from);
      console.log("new message arrived");
      istantMessage([message]);
    });
  },
    []);
  
  return (
    <ModalFlex open={open}>
      <FlexRow size={size}>
        <Header
          activeTab={activeTab}
          activeLNG={activeLNG}
          handleChange={handleChange}
          toggle={toggle}
          changeSize={changeSize}
          open={open}
        />

        <Main
          activeTab={activeTab}
          activeLNG={activeLNG}
          state={state}
          connect={connect}
          ref={mod}
        />

        <Input
          {...state}
          handleInputEnter={handleInputEnter}
          handleInputChange={handleInputChange}
        />
      </FlexRow>
    </ModalFlex>
  );
}
