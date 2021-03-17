import React from "react";
import styled from "styled-components";

// Communication stuff
import Link from "next/link";
import Router from "next/router"; // Router.push("/")

// Material-ui stuff
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// Redux stuff
import { useDispatch } from "react-redux";
import { authActions } from "store";

// Components
// import { colors, vars } from "styles/theme";
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

  const handleSubmit = React.useCallback(
    async (_e) => {
      _e.preventDefault();
      const res = await auth.login({ ...loginForm });
      console.log(res);

      if (res.code) {
        // case: ERROR
        switch (res.code) {
          case "UserNotFoundException":
            setErrors({
              ...initialErrors,
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
    },
    [loginForm, errors],
  );

  const handleChange = React.useCallback((_e) => {
    const { name, value } = _e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <>
      <Wrapper>
        <Avatar className="avatar">
          <CheckCircleIcon className="in-avatar" />
        </Avatar>
        <Typography className="title" component="h1" variant="h5">
          会員認証
        </Typography>
        <Typography>
          登録して頂いたメールを確認して、認証コードを入力してください。
        </Typography>
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
                label="Eメール"
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
    background-color: green;
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
