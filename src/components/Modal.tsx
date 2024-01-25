import React from "react";

const Modal = ({ handleModal }) => {
  return (
    <div className="absolute inset-0 h-screen w-screen bg-slate-900 bg-opacity-20 z-20 p-4">
      <div className="flex justify-between">
        <h1>Modal</h1>
        <button onClick={handleModal}>x</button>
      </div>
    </div>
  );
};

export default Modal;