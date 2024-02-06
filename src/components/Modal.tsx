import React from "react";

const Modal = ({ handleModal }) => {
  return (
    <div className="absolute inset-0 h-screen w-screen bg-slate-900 bg-opacity-80 z-20 p-16">
      <div className=" bg-white p-4 rounded-sm">
        <div className="flex justify-end pb-2">
          <button onClick={handleModal}>x</button>
        </div>
        <hr />
        <form className="grid grid-cols-2 gap-4 pt-4">
          <label className="text-gray-600">
            Company / Sender name <span className="text-red-800">*</span>
            <input type="text" className="px-2" required/>
          </label>
          <label className="text-gray-600">
            Tax Registration Number <span className="text-red-800">*</span>
            <input type="text" className="px-2" required />
          </label>
          <label className="text-gray-600">
            IBAN <span className="text-red-800">*</span>
            <input type="text" className="px-2" required />
          </label>
          <label className="text-gray-600">
            PO
            <input type="text" className="px-2" required />
          </label>
          <label>
            First name
            <input type="text" className="px-2" />
          </label>
          <label>
            Last name
            <input type="text" className="px-2" />
          </label>
          <label>
            Email
            <input type="email" className="px-2" />
          </label>
          <label>
            Web site
            <input type="web" className="px-2" />
          </label>
          <div className="flex gap-4">
            <button className="py-2 px-4 rounded-md border">Cancel</button>
            <button className="py-2 px-4 rounded-md bg-blue-600 text-white">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;