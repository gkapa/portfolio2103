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
            機能
          </Avatar>
          <p>
            AWS,
            Nextjsを利用し、ログインしたユーザに書き込み可能機能を実装しました。会員登録からログイン、ログイン維持、ログアウト、メッセージの登録まで可能です。
          </p>
        </HomeTitle>
        <Chat />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  max-width: ${vars.maxWidth.main};
`;

const HomeTitle = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: row wrap;
  justify-content: center;

  .avatar {
    width: 100px;
    height: 100px;
    margin-right: 25px;

    background-color: black;
    color: white;
    font-size: 1.4rem;
  }

  p {
    flex-grow: 1;
  }
`;
