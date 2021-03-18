import React from "react";
import styled from "styled-components";

// Communication stuff
import Link from "next/link";
import Router from "next/router"; // Router.push("/")

// Material-ui stuff
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// Redux stuff
import { useDispatch } from "react-redux";
import { authActions } from "store";

// Components
import { colors } from "styles/theme";
import auth from "pages/api/auth";

const initialErrors = {
  username: "",
  password: "",
};

export default function fun(props) {
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = React.useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    ...initialErrors,
  });

  React.useEffect(() => {}, []);

  async function handleSubmit(_e) {
    _e.preventDefault();
    if (!loginForm.username) {
      setErrors({
        ...initialErrors,
        username: "IDを入力してください。",
      });
      return;
    } else if (!loginForm.password) {
      setErrors({
        ...initialErrors,
        password: "パスワードを入力してください。",
      });
      return;
    }

    console.log({
      loginForm: loginForm,
    });
    const res = await auth.login({ ...loginForm });
    console.log(res);

    if (res.code) {
      // case: ERROR
      switch (res.code) {
        case "UserNotConfirmedException":
          alert("メール認証が必要です。認証ページに移動します。");
          dispatch(
            authActions.setUser({
              username: loginForm.username,
            }),
          );
          Router.push("/join/confirm");
          break;
        case "UserNotFoundException":
          alert("登録されていないユーザIDです。");
          setErrors({
            ...initialErrors,
            username: "登録されていないユーザIDです。",
          });
          break;
        case "NotAuthorizedException":
          setErrors({
            ...initialErrors,
            username: "ユーザIDまたはパスワードが間違っています。",
            password: "ユーザIDまたはパスワードが間違っています。",
          });
          break;
        default:
          setErrors({
            ...initialErrors,
          });
          break;
      }
    } else {
      // case: NOT ERROR
      Router.push("/");
    }
  }

  const handleChange = React.useCallback((_e) => {
    const { name, value } = _e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <>
      <Wrapper>
        <Avatar className="avatar">
          <ExitToAppIcon className="in-avatar" />
        </Avatar>
        <Typography className="title" component="h1" variant="h5">
          ログイン
        </Typography>
        <Typography>IDとパスワード入力でログインができます。</Typography>
        <br />
        <form className="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                type="text"
                label="ID"
                name="username"
                value={loginForm.username}
                onChange={(e) => handleChange(e)}
                error={errors.username ? true : false}
                helperText={errors.username ? errors.username : null}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                type="password"
                label="パスワード"
                name="password"
                value={loginForm.password}
                onChange={(e) => handleChange(e)}
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password : null}
              />
            </Grid>
          </Grid>
          <Button
            onClick={(e_) => handleSubmit(e_)}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit">
            確認
          </Button>
        </form>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 40px auto;
  width: 400px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  .avatar {
    margin: 8px;
    background-color: ${colors.cyan[8]};
    .in-avatar {
      color: white;
    }
  }

  .title {
    margin-bottom: 16px;
  }

  .form {
    .submit {
      margin: 16px auto;
    }
  }
`;
