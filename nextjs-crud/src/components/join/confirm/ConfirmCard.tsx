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
import { useSelector, shallowEqual } from "react-redux";
import { RootState } from "store";
import { useDispatch } from "react-redux";
import { authActions } from "store";

// Components
// import { colors, vars } from "styles/theme";
import auth from "pages/api/auth";

const initialErrors = {
  email: "",
  code: "",
};

export default function fun(props) {
  const dispatch = useDispatch();

  const [confirmForm, setConfirmForm] = React.useState({
    email: "",
    code: "",
  });
  const [errors, setErrors] = React.useState({
    ...initialErrors,
  });
  const storeEmail = useSelector(
    (x: RootState) => x.authReducer.user.email,
    shallowEqual,
  );

  React.useEffect(() => {
    setConfirmForm({
      ...confirmForm,
      email: storeEmail,
    });
  }, []);

  const handleSubmit = React.useCallback(
    async (_e) => {
      _e.preventDefault();
      const res = await auth.confirmRegister({ ...confirmForm });
      console.log(res);

      if (res.code) {
        // case: ERROR
        switch (res.code) {
          case "UserNotFoundException":
            setErrors({
              ...initialErrors,
              code: "正しい認証コードを入力してください。",
            });
            break;
          default:
            setErrors({
              ...initialErrors,
              code: res.code,
            });
            break;
        }
      } else {
        // case: NOT ERROR
        Router.push("/");
      }
    },
    [confirmForm, errors],
  );

  const handleChange = React.useCallback((_e) => {
    const { name, value } = _e.target;
    setConfirmForm((prev) => ({ ...prev, [name]: value }));
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
                id="email"
                type="email"
                label="Eメール"
                name="email"
                value={confirmForm.email}
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
                id="code"
                label="認証コード"
                name="code"
                value={confirmForm.code}
                onChange={(e) => handleChange(e)}
                error={errors.code ? true : false}
                helperText={errors.code ? errors.code : null}
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
