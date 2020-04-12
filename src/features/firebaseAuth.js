import firebase from "firebase/app";

const GoogleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithRedirect(provider)
    .then(function(result) {
      return result;
    })
    .catch(function(error) {
      return error;
    });
};

export default GoogleAuth;
