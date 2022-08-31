import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import svgImageClose from "../../../assets/images/closeModalIcon.svg";
import "./input.css";
import ModalInfo from "../../ModalInfo/ModalInfo";
import { useState } from "react";

export const InputForm = () => {
  const [IsModalInfoActive, setIsModalInfoActive] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const inputName = useRef();
  const inputEmail = useRef();
  const inputTextArea = useRef();
  const form = useRef();

  const handlerSubmit = (e) => {
    e.preventDefault();
    // const inputNameValue = inputName.current.value;
    // const inputEmailValue = inputEmail.current.value;
    // const inputTextAreaValue = inputTextArea.current.value;

    // console.log(inputNameValue);

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
