import React from "react";
import styled from "styled-components";

// Communication stuff
import Link from "next/link";
import Router from "next/router"; // Router.push("/")

// Material-ui stuff
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
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
  username: undefined,
  email: undefined,
  password: undefined,
};

export default function fun(props) {
  const dispatch = useDispatch();

  const [registerForm, setRegisterForm] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    ...initialErrors,
  });

  React.useEffect(() => {}, []);
  // async function fux() {}

  const handleSubmit = React.useCallback(
    async (_e) => {
      _e.preventDefault();
      if (!registerForm.email) {
        setErrors({
          ...initialErrors,
          email: "Eメールを入力してください。",
        });
        return;
      }

      const res = await auth.register(registerForm);
      console.log({ res });
      if (res.code) {
        // case: ERROR
        // メッセージ参照： https://dev.classmethod.jp/articles/try-amplify-ui-angular-translations/
        console.log(res.code);
        switch (res.code) {
          case "UsernameExistsException":
            setErrors({
              ...initialErrors,
              username: "既に存在しているユーザ名です。",
            });
            break;
          case "InvalidPasswordException":
          case "InvalidParameterException":
            setErrors({
              ...initialErrors,
              password: "パスワードは8以上の文字数を入力してください。",
            });
            break;
          default:
            setErrors({
              ...initialErrors,
              username: res.message,
            });
        }
      } else {
        // case: NOT ERROR
        Router.push("/join/confirm");
        dispatch(
          authActions.setUser({
            username: registerForm.username,
          }),
        );
      }
    },
    [registerForm, errors],
  );

  const handleChange = React.useCallback((_e) => {
    const { name, value } = _e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <>
      {/* <Head
        title={"XX株式会社（XX） | XX支援企業"}
        url={"/"}
      /> */}
      <Wrapper>
        <Avatar className="avatar">
          <LockOutlinedIcon className="in-avatar" />
        </Avatar>
        <Typography className="title" component="h1" variant="h5">
          Sign up
        </Typography>
        <form className="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="ID"
                name="username"
                value={registerForm.username}
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
                id="email"
                label="Eメール"
                type="email"
                name="email"
                value={registerForm.email}
                onChange={(e) => handleChange(e)}
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email : null}
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
                value={registerForm.password}
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
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
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
    background-color: red;
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
