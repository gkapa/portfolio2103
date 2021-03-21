import React from "react";
import styled from "styled-components";

// Communication stuff
// import axios from 'axios';
// import Link from "next/link";
// import Router from "next/router";  // ex: Router.push("/")
// import { useRouter } from "next/router";  // ex: router.pathname
import { API, graphqlOperation } from "aws-amplify";
import { createChat } from "graphql/mutations";
import { listChats, listChatsByCreated } from "graphql/queries";

// UI stuff
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";

// Redux stuff
import { useSelector, shallowEqual } from "react-redux";
import { RootState } from "store";

// Components
import { colors, vars } from "styles/theme";

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
    content:
      "aaaaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxa",
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

  const isAuthenticated = useSelector(
    (x: RootState) => x.authReducer.isAuthenticated,
    shallowEqual,
  );
  const user = useSelector((x: RootState) => x.authReducer.user, shallowEqual);

  React.useEffect(() => {
    getChatList();
  }, []);

  // async function getData(user) {
  //   const todoData = await API.graphql(
  //     graphqlOperation(listTodosSortedByName, { owner: user.username }),
  //   );
  //   dispatch({ type: QUERY, todos: todoData.data.listTodosSortedByName.items });
  // }
  async function getChatList() {
    try {
      // const res = await API.graphql({ query: listChats });
      // setChats([...res.data.listChats.items]);

      const res = await API.graphql(
        graphqlOperation(listChatsByCreated, {
          status: "ok",
          sortDirection: "DESC",
          limit: 10,
        }),
      );
      // @ts-ignore
      const reverse = res.data.listChatsByCreated.items.reverse();
      setChats([...reverse]);

      // const ress = await API.graphql({ query: listChatsByCreated });
    } catch (error) {
      console.log(error);
    }
  }
  async function submitChat() {
    try {
      if (!isAuthenticated) return;
      const chat = newChat.current.value;
      if (chat.length < 1) {
        alert("メッセージを入力してください");
        return;
      }

      const pay = {
        donor: user.username,
        content: newChat.current.value,
        status: "ok",
      };
      const res = await API.graphql({
        query: createChat,
        variables: { input: pay },
        // @ts-ignore
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log({ res: res });
      newChat.current.value = "";
      getChatList();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Wrapper>
        <InnerContainer>
          <div className="card-title">チャット機能 - © Han Sahyeon</div>
          <div className="card-content">
            {chats.map((chat, idx) => {
              return (
                <ChatBlock key={idx}>
                  {isAuthenticated && chat.donor === user.username ? (
                    <>
                      <div className="donor c-right">{chat.donor}</div>
                      <div className="bubble c-right">{chat.content}</div>
                    </>
                  ) : (
                    <>
                      <div className="donor c-left">{chat.donor}</div>
                      <div className="bubble c-left">{chat.content}</div>
                    </>
                  )}
                </ChatBlock>
              );
            })}
          </div>
          <div className="card-create">
            {isAuthenticated ? (
              <input
                className="newchat-text"
                ref={newChat}
                placeholder="新しいメッセージを入力してください"></input>
            ) : (
              <div className="newchat-text">
                <LockIcon
                  style={{ verticalAlign: "middle", marginRight: "8px" }}
                />
                書き込みはログインしたユーザのみ可能です
              </div>
            )}
            <Button className="newchat-button" onClick={() => submitChat()}>
              Send
            </Button>
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
  font-weight: 500;
  color: white;
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
  }
  .card-create {
    background-color: #2d3e50;
    padding: 15px 30px;
    border: 1px solid gray;

    display: flex;
    align-items: center;

    .newchat-text {
      flex-grow: 1;
      border: none;
      padding: 8px;
      background-color: transparent;

      font-weight: 500;
      color: white;
    }
    div.newchat-text {
      color: gray;
    }
    .newchat-button {
      margin-left: 16px;
      background-color: ${localVars.chatColor};
      color: white;
    }
  }

  color: white;
`;

const ChatBlock = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;

  .donor {
    display: inline-block;
    position: relative;
    margin: 0 8px;
    padding: 0px;
    color: gray;
  }
  .bubble {
    max-width: 300px;
    overflow-wrap: break-word;
    display: inline-block;
    position: relative;
    margin: 8px;
    padding: 8px;
    border-radius: 10px;
    background-color: ${localVars.chatColor};

    &.c-left:before {
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
    &.c-right:before {
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
  }
  .c-right {
    margin-left: auto;
  }
`;
