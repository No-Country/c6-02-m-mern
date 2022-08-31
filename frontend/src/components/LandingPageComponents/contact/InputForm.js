import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import svgImageClose from "../../../assets/images/closeModalIcon.svg";
import "./input.css";
import ModalInfo from "../../ModalInfo/ModalInfo";
import { useState } from "react";
import { Loading } from "../../loading/Loading";
import { validarEmail } from "../../../util/validateEmail";

export const InputForm = () => {
  const [IsModalInfoActive, setIsModalInfoActive] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [isInValidName, setisInValidName] = useState(false);
  const [isInValidEmail, setisInValidEmail] = useState(false);
  const [isInValidTextArea, setisInValidTextArea] = useState(false);

  const inputName = useRef();
  const inputEmail = useRef();
  const inputTextArea = useRef();
  const form = useRef();

  const handlerSubmit = (e) => {
    setisLoading(true);
    e.preventDefault();
    const inputNameValue = inputName.current.value;
    const inputEmailValue = inputEmail.current.value;
    const inputTextAreaValue = inputTextArea.current.value;

    if (inputNameValue.trim() === "") {
      setisInValidName(true);
      setisLoading(false);
      return;
    }
    setisLoading(false);
    if (!validarEmail(inputEmailValue)) {
      setisInValidEmail(true);
      setisLoading(false);
      return;
    }

    if (inputTextAreaValue.length < 16) {
      setisInValidTextArea(true);
      setisLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_d40ov0j",
        "template_h8rbjxs",
        "form",
        "zg9uaqkAbfcchByFK"
      )
      .then(
        (response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "SEND",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsModalInfoActive(true);
          setisLoading(false);
        },
        (error) => {
          Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "please try later ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    setisLoading(true);
  };
  return (
    <form className="InputForm" onSubmit={handlerSubmit} ref={form}>
      <ModalInfo
        img={svgImageClose}
        title={"Your message was sent"}
        success={"successfully!"}
        parrafo={"we will contact you soon"}
        alt={"closeIcon"}
        className={IsModalInfoActive && "ModalInfo active"}
        close={() => setIsModalInfoActive(false)}
      />
      <label>Full name</label>
      <input
        type="text"
        placeholder="Ex: Jhon Black"
        ref={inputName}
        name="from_name"
      />
      {isInValidName && (
        <p className="form-paragraph-error">please write a name correct</p>
      )}

      <label>Mail</label>
      <input
        name="from_email"
        type="email"
        placeholder="Ex: jhonblack01@gmail.com"
        ref={inputEmail}
      />
      {isInValidEmail && (
        <p className="form-paragraph-error">the Email is incorrect</p>
      )}

      <label>Leave us your query below</label>
      <input type="text" ref={inputTextArea} name="message" />
      {isInValidTextArea && (
        <p className="form-paragraph-error">
          please the text muss have 16 characters
        </p>
      )}

      <button type="submit">Submit</button>
      {isLoading && <Loading />}
    </form>
  );
};
