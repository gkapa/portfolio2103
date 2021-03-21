import React from "react";
import styled from "styled-components";

// Communication stuff
import Link from "next/link";
import auth from "pages/api/auth";
import Router from "next/router";

// Redux stuff
import { useSelector, shallowEqual } from "react-redux";
import { RootState } from "store";

// UI stuff
import Button from "@material-ui/core/Button";
import { colors, vars } from "styles/theme";
import { menuItems, authedMenuItems } from "./menuItems";

export default function fun(props) {
  const isAuthenticated = useSelector(
    (x: RootState) => x.authReducer.isAuthenticated,
    shallowEqual,
  );

  return (
    <React.Fragment>
      <Container id="navbar">
        <div className="appbar">
          <div className="logo">
            <Link href="/">HAN</Link>
          </div>
          <div className="menu">
            {!isAuthenticated ? (
              <>
                {menuItems.map((el) => {
                  if (el.link) {
                    return (
                      <Link href={el.link} key={el.name}>
                        <Button className="menu-button" variant="contained">
                          {el.name}
                        </Button>
                      </Link>
                    );
                  } else if (el.scroll) {
                    return (
                      <Button
                        className="menu-button"
                        variant="contained"
                        key={el.name}>
                        {el.name}
                      </Button>
                    );
                  }
                })}
              </>
            ) : (
              <>
                {authedMenuItems.map((el) => {
                  if (el.link) {
                    return (
                      <Link href={el.link} key={el.name}>
                        <Button className="menu-button" variant="contained">
                          {el.name}
                        </Button>
                      </Link>
                    );
                  } else if (el.func === "logout") {
                    return (
                      <Button
                        className="menu-button"
                        variant="contained"
                        key={el.name}
                        onClick={() => {
                          auth.logout();
                          Router.push("/");
                        }}>
                        {el.name}
                      </Button>
                    );
                  }
                })}
              </>
            )}
          </div>
        </div>
      </Container>
      <Blank></Blank>
    </React.Fragment>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: ${vars.zIndex.navbar};
  width: 100%;
  background-color: ${colors.bluegray[8]};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0%;
    border-bottom: 5px double rgba(0, 0, 0, 0.5);
    animation: anim-navbar-border 1.5s ease 0s 1 forwards;
    @keyframes anim-navbar-border {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }
  }

  .appbar {
    width: 100%;
    max-width: ${vars.maxWidth.main};
    margin: 0 auto;
    height: 80px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > .logo {
      margin-left: 80px;

      a {
        font-family: "Dancing Script", "Noto Serif JP", "Open Sans", sans-serif;
        font-size: 2.2rem;
        color: white;
      }
    }

    & > .menu {
      margin-right: 80px;

      display: flex;
      justify-content: flex-end;
      align-items: flex-start;

      button {
        margin: 0 8px;
        background-color: ${colors.cyan[9]};
        color: white;
        font-family: "Montserrat", "Noto Serif JP", "Open Sans", sans-serif;
        font-size: 1.05rem;
        font-weight: 700;
      }
    }
  }
`;

const Blank = styled.div`
  width: 100%;
  height: 80px;
`;
