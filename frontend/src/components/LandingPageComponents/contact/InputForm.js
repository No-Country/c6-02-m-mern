import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./input.css";

export const InputForm = () => {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputTextArea = useRef();
  const form = useRef();

  const handlerSubmit = (e) => {
    e.preventDefault();
    const inputNameValue = inputName.current.value;
    const inputEmailValue = inputEmail.current.value;
    const inputTextAreaValue = inputTextArea.current.value;

    console.log(inputNameValue);

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
        },
        (error) => {
          Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "error",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };
  return (
    <form className="InputForm" onSubmit={handlerSubmit} ref={form}>
      <label>Full name</label>
      <input
        type="text"
        placeholder="Ex: Jhon Black"
        ref={inputName}
        name="from_name"
      />
      <label>Mail</label>
      <input
        name="from_email"
        type="email"
        placeholder="Ex: jhonblack01@gmail.com"
        ref={inputEmail}
      />
      <label>Leave us your query below</label>
      <input type="text" ref={inputTextArea} name="message" />
      <button type="submit">Submit</button>
    </form>
  );
};
