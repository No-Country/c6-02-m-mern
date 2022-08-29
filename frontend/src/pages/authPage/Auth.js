import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
// validators input

import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../util/validators";

// useForm hook
import { useForm } from "../../shared/hooks/form-hook";

// css

import "./Auth.css";

import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub";
import { GlobalContext } from "../../context/GlobalContext";
import LoadingSpinner from "../../UI/LoadingSpinner";
import { ErrorComponent } from "../../UI/ErrorComponent";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState(null);
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

  const { AuthCtx } = useContext(GlobalContext);

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("https://digitize.monster/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
      });

      const responseData = await response.json();

      if (responseData.error) {
        setIsLoading(false);
        throw new Error(responseData.message);
      }

      setIsLoading(false);
      AuthCtx.handlerLogIn(responseData.token);
      navigate("/control-panel-admin", {
        replace: true,
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "WEOLCOME TO THE PANEL ADMIN ",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (e) {
      setIsLoading(false);
      console.log(e.message);
      seterror(e.message || "something wend wrong please try again");
    }
  };

  return (
    <>
      <HeaderSub />
      <div className="AuthPage">
        <div className="content-authPage">
          <h2 className="title">Sing in</h2>
          <div className="AuthPage__wrapper">
            {error && <ErrorComponent messageError={error} />}
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
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <Button type="submit" disabled={!formState.isValid}>
                  Sing In
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
