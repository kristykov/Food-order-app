import React, { MutableRefObject, useRef } from "react";
import classes from "./AuthForm.module.scss";

const AuthForm = () => {
  const emailInputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log(enteredEmail, enteredPassword);
  };

  return (
    <section className={classes.auth}>
      <h1 className={classes["auth-title"]}>Login</h1>
      <p className={classes["auth-subtitle"]}>
        Hey, enter your details to get sign in to your account
      </p>
      <form onSubmit={submitHandler}>
        <div className={classes["auth-control"]}>
          <label className={classes["auth-control-label"]} htmlFor="email">
            <input
              className={classes["auth-control-input"]}
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              ref={emailInputRef}
            />
          </label>
        </div>
        <div className={classes["auth-control"]}>
          <label className={classes["auth-control-label"]} htmlFor="password">
            <input
              className={classes["auth-control-input"]}
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              ref={passwordInputRef}
            />
          </label>
        </div>
        <div className={classes["auth-actions"]}>
          <button id={classes.loginBtn} className="general-btn" type="button">
            Login
          </button>
          <a>Switching</a>
        </div>
      </form>
    </section>
  );
};
export default AuthForm;
