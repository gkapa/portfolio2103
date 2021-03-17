import { Auth } from "aws-amplify";

export default {
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

  async confirmRegister({ email, code }) {
    try {
      await Auth.confirmSignUp(email, code);
      return { result: "OK" };
    } catch (error) {
      return error;
    }
  },
};
