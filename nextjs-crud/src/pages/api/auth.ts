import { Auth } from "aws-amplify";

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
      return { result: "OK" };
    } catch (error) {
      return error;
    }
  },

  async login({ username, password }) {
    try {
      const user = await Auth.signIn(username, password);
      return user;
    } catch (error) {
      console.log("error signing in", error);
    }
  },
};
