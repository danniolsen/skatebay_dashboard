"use-strict";
import React, { useState } from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import DefaultContainer from "../containers/DefaultContainer";

function AuthWidget(props) {
  const s = useStyles();
  const {
    signInUser,
    authData,
    currentData,
    loading,
    authError,
    btnInactive,
    btnStatus
  } = props;
  const [showPass, setShowPass] = useState(false);

  // get input as it's types
  const newInputData = input => {
    let inputData = { [input.target.name]: input.target.value };
    if ("email" in inputData) {
      validateEmail(inputData.email);
    } else if ("password" in inputData) {
      validatePassword(inputData.password);
    } else {
      setShowPass(false);
      return null;
    }
  };

  // validate input field email to be a real email format
  const validateEmail = emailInput => {
    let currentDataCopy = Object.assign({}, currentData);
    currentDataCopy.email = emailInput;
    authData(currentDataCopy);
    let emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailFormat.test(emailInput)
      ? emailDone(emailInput)
      : emailNotDone(emailInput);
  };

  // set password empty if email is not validated as true
  const emailNotDone = emailInput => {
    setShowPass(false);
    let currentDataCopy = Object.assign({}, currentData);
    currentDataCopy.password = "";
    currentDataCopy.email = emailInput;
    authData(currentDataCopy);
  };

  const emailDone = emailInput => {
    setShowPass(true);
  };

  // validate password is equal or longer than 8 chars
  const validatePassword = passwordInput => {
    let currentDataCopy = Object.assign({}, currentData);

    if (passwordInput !== undefined) {
      currentDataCopy.password = passwordInput;
      authData(currentDataCopy);
      if (passwordInput.length >= 8) {
        btnStatus(false);
      } else {
        btnStatus(true);
      }
    }
  };

  // handle signin click
  const signIn = () => {
    signInUser();
  };

  return (
    <div className={s.authCon}>
      <DefaultContainer headline="Skatebay" center>
        <div className={s.inputCon}>
          <div className={s.inputIcon}>
            <i className="material-icons">mail</i>
          </div>
          <input
            className={s.input}
            name="email"
            type="email"
            placeholder="Email"
            onChange={input => newInputData(input)}
            disabled={loading.form}
          />
        </div>

        {showPass && (
          <div className={s.inputCon}>
            <div className={s.inputIcon}>
              <i className="material-icons">lock</i>
            </div>
            <input
              className={s.input}
              name="password"
              type="password"
              placeholder="Password"
              onChange={input => newInputData(input)}
              disabled={loading.form}
            />
          </div>
        )}

        <div className={s.buttonCon}>
          <button
            onClick={() => signIn()}
            className={s.button}
            disabled={btnInactive}
          >
            {loading.btn ? "loading" : "Sign in"}
          </button>
        </div>

        {authError.error !== null && <p>{authError.error}</p>}
      </DefaultContainer>
    </div>
  );
}

export default AuthWidget;

const useStyles = makeStyles(theme => ({
  authCon: {
    margin: "20% auto",
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10%",
      width: "450px"
    }
  },
  inputCon: {
    width: "90%",
    height: "32px",
    margin: "10px auto 10px auto",
    border: "1px solid #d6d6d6",
    padding: "2px",
    borderRadius: 5
  },
  inputIcon: {
    width: "10%",
    textAlign: "center",
    padding: "4px 0px",
    float: "left",
    color: "#525252"
  },
  input: {
    border: "none",
    borderLeft: "1px solid #d6d6d6",
    padding: "2.2%",
    width: "80%",
    fontSize: 13,
    background: "none"
  },
  buttonCon: {
    width: "91.1%",
    textAlign: "right",
    margin: "0px auto 10px auto"
  },
  button: {
    padding: "7px 20px",
    border: "1px solid #d6d6d6",
    borderRadius: 5
  }
}));

//AuthWidget.defaultProps = {};
//AuthWidget.propTypes = {};
