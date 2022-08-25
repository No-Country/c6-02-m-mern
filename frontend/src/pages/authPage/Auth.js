import React from "react";

// validators input

import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../util/validators";

// useForm hook
import { useForm } from "../../shared/hooks/form-hook";

// css

import "./Auth.css";

import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <>
      <HeaderSub />
      <div className="AuthPage">
        <div className="content-authPage">
          <h2 className="title">Sing in</h2>
          <div className="AuthPage__wrapper">
            <form onSubmit={authSubmitHandler}>
              <Input
                element="input"
                id="email"
                type="email"
                label="E-Mail"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter a valid email address."
                onInput={inputHandler}
              />
              <Input
                element="input"
                id="password"
                type="password"
                label="Password"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid password, at least 5 characters."
                onInput={inputHandler}
              />
              <Button type="submit" disabled={!formState.isValid}>
                Sing In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
