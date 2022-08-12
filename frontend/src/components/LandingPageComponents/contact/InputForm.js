import React from 'react';
import './input.css';

export const InputForm = () => {
  return (
    <form className="InputForm">
      <label for="">Full name</label>
      <input type="text" placeholder="Ex: Jhon Black" />
      <label for="">Mail</label>
      <input type="text" placeholder="Ex: jhonblack01@gmail.com" />
      <label for="">Leave us your query below</label>
      <input type="text" />
      <button>Submit</button>
    </form>
  );
};
