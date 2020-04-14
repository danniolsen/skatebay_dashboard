import { auth } from "../firebase/FirebaseConfig";

const errors = [
  { error: "something", msg: "something went wrong" },
  { error: "auth/wrong-password", msg: "Wrong email or password" },
  { error: "auth/user-not-found", msg: "Wrong email or password" },
  { error: "auth/internal-error", msg: "Internal authentication error" }
];

const GoogleAuth = userData => {
  return auth
    .signInWithEmailAndPassword(userData.email, userData.password)
    .then(user => {
      return { user: user, error: null };
    })
    .catch(function(err) {
      const errorExists = errors.find(({ error }) => error === err.code);

      let error = errorExists ? errorExists.msg : errors[0];
      return { user: null, error: error };
    });
};

export default GoogleAuth;
