import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.scss";
import { login } from "../../store/authSlice";

interface IProps {
  type: string;
}

const AuthForm = ({ type }: IProps) => {
  const { isAuthenticated } = useSelector((state: any) => {
    return state.auth;
  });
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      console.log("works");
      history.push("/menu");
    }
  }, [history, isAuthenticated]);
  const dispatch = useDispatch();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const userInputRef = useRef<HTMLInputElement>(null);
  const [isEmailNotFound, setIsEmailNotFound] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredEmail = emailInputRef.current ? emailInputRef.current.value : "";
  const enteredUsername = userInputRef.current
    ? userInputRef.current.value
    : "";
  const enteredPassword = passwordInputRef.current
    ? passwordInputRef.current.value
    : "";
  // const authCtx = useContext(AuthContext);

  const emailValidation = (email: string) => {
    if (email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      return true;
    }
    return false;
  };

  const passwordValidation = (password: string) => {
    if (password === "" || password.length < 8) {
      return false;
    }
    return true;
  };

  const enteredEmailIsValid = emailValidation(enteredEmail);
  const enteredPasswordIsValid = passwordValidation(enteredPassword);
  const enteredUsernameIsValid = enteredUsername.trim() !== "";

  const inputEmailBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const inputEmailFocusHandler = () => {
    setEnteredEmailTouched(false);
  };

  const inputPasswordBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  const inputPasswordFocusHandler = () => {
    setEnteredPasswordTouched(false);
  };

  const inputUsernameBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const inputUsernameFocusHandler = () => {
    setEnteredNameTouched(false);
  };

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordTouched;
  const userNameIsInvalid = !enteredUsernameIsValid && enteredNameTouched;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let url;
    if (type === "login") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOjugkvRyZNADJXwWmB9jnMB4B9riXYz8";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOjugkvRyZNADJXwWmB9jnMB4B9riXYz8";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          if (data && data.error && data.error.message === "EMAIL_NOT_FOUND") {
            setIsEmailNotFound(true);
          }
          console.log("FAILED", data.error.message);
        });
      })
      .then((data) => {
        // authCtx.login(data.idToken);
        dispatch(login(data.idToken));
        localStorage.setItem("username", enteredUsername);
        // history.push("/menu");
        history.replace("/menu");
      });

    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);
  };

  return (
    <section>
      <a className={classes["auth-home-link"]} href="/">
        Food
      </a>
      <div className={classes.auth}>
        <h1 className={classes["auth-title"]}>
          {type === "login" ? "Login" : "Sing Up"}
        </h1>
        <p className={classes["auth-subtitle"]}>
          {type === "login"
            ? "Hey, enter your details to login to your account"
            : "Hey, let's create your account. Just fill in the form below"}
        </p>
        {!isEmailNotFound && (
          <form onSubmit={submitHandler}>
            <div className={classes["auth-control"]}>
              <label className={classes["auth-control-label"]} htmlFor="name">
                <input
                  className={classes["auth-control-input"]}
                  type="name"
                  placeholder="Enter your username"
                  required
                  onBlur={inputUsernameBlurHandler}
                  onFocus={inputUsernameFocusHandler}
                  ref={userInputRef}
                />
              </label>
              {userNameIsInvalid && (
                <p className={classes["auth-error-text"]}>
                  User name can not be empty
                </p>
              )}
            </div>
            <div className={classes["auth-control"]}>
              <label className={classes["auth-control-label"]} htmlFor="email">
                <input
                  className={classes["auth-control-input"]}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  onBlur={inputEmailBlurHandler}
                  onFocus={inputEmailFocusHandler}
                  ref={emailInputRef}
                />
              </label>
              {emailInputIsInvalid && (
                <p className={classes["auth-error-text"]}>
                  Please enter correct email
                </p>
              )}
            </div>
            <div className={classes["auth-control"]}>
              <label
                className={classes["auth-control-label"]}
                htmlFor="password"
              >
                <input
                  className={classes["auth-control-input"]}
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  onBlur={inputPasswordBlurHandler}
                  onFocus={inputPasswordFocusHandler}
                  ref={passwordInputRef}
                />
              </label>
              {passwordInputIsInvalid && (
                <p className={classes["auth-error-text"]}>
                  Please enter correct password
                </p>
              )}
            </div>
            <div className={classes["auth-actions"]}>
              <button
                id={classes.loginBtn}
                className="general-btn"
                type="submit"
              >
                {type === "login" ? "Login" : "Create an account"}
              </button>
              {type !== "login" ? (
                <p className={classes["auth-switch"]}>
                  Already have an account?{" "}
                  <a className={classes["auth-switch-link"]} href="/login">
                    Login here
                  </a>
                </p>
              ) : (
                <p className={classes["auth-switch"]}>
                  Don't have an account?{" "}
                  <a
                    className={classes["auth-switch-link"]}
                    href="/registration"
                  >
                    Register here
                  </a>
                </p>
              )}
            </div>
          </form>
        )}
        {isEmailNotFound && (
          <p>
            Ooops! Looks like we don't have you among our users.{" "}
            <a className={classes["auth-switch-link"]} href="/registration">
              Register here
            </a>
          </p>
        )}
      </div>
    </section>
  );
};
export default AuthForm;
