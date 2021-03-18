import React from "react";
import styled from "styled-components";

// Communication stuff

// UI stuff
import Avatar from "@material-ui/core/Avatar";
import { vars } from "styles/theme";

// Redux stuff
// import { shallowEqual, useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { RootState } from "store";

// Components
import Chat from "./Chat";

export default function fun(props) {
  return (
    <>
      <Wrapper>
        <HomeTitle>
          <Avatar className="avatar">
            チャット
            <br />
            APP！
          </Avatar>
          <p>
            AWS,
            Nextjsを利用したCRUD可能なチャット機能を実装しました。会員登録からログイン、ログイン維持、ログアウト、メッセージの登録まで可能です。
          </p>
        </HomeTitle>
        <Chat />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${vars.maxWidth.main};
`;

const HomeTitle = styled.div`
  display: flex;
  flex-direction: row wrap;

  .avatar {
    display: inline-block;
    margin: 16px;

    background-color: black;
    color: white;
    font-family: "Montserrat", "Noto Serif JP", "Open Sans", sans-serif;
    font-size: 1.4rem;
  }

  p {
    flex-grow: 1;
  }
`;
