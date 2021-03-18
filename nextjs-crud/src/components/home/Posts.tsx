import React from "react";
import styled from "styled-components";

// Communication stuff
// import axios from 'axios';
// import Link from "next/link";
// import Router from "next/router";  // ex: Router.push("/")
// import { useRouter } from "next/router";  // ex: router.pathname

// UI stuff
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ApartmentIcon from "@material-ui/icons/Apartment";

// Redux stuff
// import { shallowEqual, useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { RootState } from "store";
// import { authActions } from "store";

// Components
import { colors, vars } from "styles/theme";
// import Head from "atoms/Head";
// import Home from "components/home/Home";

const skeleton = [
  {
    donor: "test1",
    content: "aaaaaaaa",
  },
  {
    donor: "test1",
    content: "bbb",
  },
  {
    donor: "test1",
    content: "cccc",
  },
  {
    donor: "test2",
    content: "aaaaaaaa",
  },
  {
    donor: "test2",
    content: "aaaddddaa",
  },
  {
    donor: "test3",
    content: "aaaaxxxxa",
  },
];

const localVars = {
  chatColor: "#00bfb6",
};

export default function fun(props) {
  // const router = useRouter();
  // const dispatch = useDispatch();
  const [chats, setChats] = React.useState([]);
  const newChat = React.useRef<any>("");

  React.useEffect(() => {
    setChats(skeleton);
  }, []);

  // async function fux() {}

  return (
    <>
      <Wrapper>
        <InnerContainer>
          <div className="card-title">チャット機能 - © Han Sahyeon</div>
          <div className="card-content">
            {chats.map((chat) => {
              return <Bubble className="sb2">{chat.content}</Bubble>;
            })}
          </div>
          <div className="card-create">
            <textarea
              className="newchat-text"
              ref={newChat}
              placeholder="タイトルを入力してください"></textarea>
            <Button className="newchat-button">Send</Button>
          </div>
        </InnerContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 80px auto;
  font-family: "Montserrat", "Noto Serif JP", "Open Sans", sans-serif;
`;

const InnerContainer = styled.div`
  .card-title {
    background-color: #212425;
    padding: 15px 30px;
    border: 1px solid gray;
  }
  .card-content {
    background-color: #2d3e50;
    padding: 15px 30px;
    border: 1px solid gray;

    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
  }
  .card-create {
    background-color: #2d3e50;
    padding: 15px 30px;
    border: 1px solid gray;

    display: flex;
    align-items: center;

    .newchat-text {
      border: none;
      flex-grow: 1;
      background-color: inherit;
      font-family: "Montserrat", "Noto Serif JP", "Open Sans", sans-serif;
      color: white;
    }
    .newchat-button {
      margin-left: 16px;
      background-color: ${localVars.chatColor};
    }
  }

  color: white;
`;

const Bubble = styled.div`
  position: relative;
  display: inline-block;
  margin: 8px;
  padding: 8px;
  border-radius: 10px;
  background-color: #00bfb6;

  &.sb1:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid ${localVars.chatColor};
    border-top: 10px solid ${localVars.chatColor};
    border-bottom: 10px solid transparent;
    left: -19px;
    top: 6px;
  }

  &.sb2 {
    margin-left: auto;
  }
  &.sb2:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-right: 10px solid transparent;
    border-left: 10px solid ${localVars.chatColor};
    border-top: 10px solid ${localVars.chatColor};
    border-bottom: 10px solid transparent;
    right: -19px;
    top: 6px;
  }
`;
