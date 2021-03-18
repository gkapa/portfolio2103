import { Auth } from "aws-amplify";
import checkUser from "plugins/auth";
import { store, authActions } from "store";

export default {
  //   The Auth.signUp promise returns a data object of type ISignUpResult with a CognitoUser.
  // {
  //     user: CognitoUser;
  //     userConfirmed: boolean;
  //     userSub: string;
  // }
  async register({ username, email, password }) {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  },

  async confirmRegister({ username, code }) {
    try {
      await Auth.confirmSignUp(username, code);
      return { OK: "confirm successful" };
    } catch (error) {
      return error;
    }
  },

  async login({ username, password }) {
    try {
      const user = await Auth.signIn(username, password);
      store.dispatch(
        authActions.setAuth({
          username: user.CognitoUser.username,
          email: user.CognitoUser.attributes.email,
        }),
      );
      return user;
    } catch (error) {
      return error;
    }
  },

  async logout() {
    try {
      await Auth.signOut();
      store.dispatch(authActions.setUnauth());
      return { OK: "logout success" };
    } catch (error) {
      return error;
    }
  },
};
