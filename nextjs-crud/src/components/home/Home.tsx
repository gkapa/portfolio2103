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
import Posts from "./Posts";

export default function fun(props) {
  return (
    <>
      <Wrapper>
        <HomeTitle>
          <Avatar className="avatar">
            CRUD
            <br />
            機能
          </Avatar>
          <p>
            AWS,
            Nextjsを利用したCRUD可能な書き込み機能を実装しました。会員登録からログイン、ログイン維持、ログアウト、メッセージの登録まで可能です。
          </p>
        </HomeTitle>
        <Posts />
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
    font-family: "Montserrat", "Noto Serif JP", "Open Sans", sans-serif;
    font-size: 1.4rem;
  }

  p {
    flex-grow: 1;
  }
`;
