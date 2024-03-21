import React, { useContext } from "react";
import SenderContext from "../context/sender";
import ModalContext from '../context/modal';

const SenderModal = () => {
  const { sender, handleSenderChange, resetSender, handleSave } = useContext(SenderContext);
  const { modal, setModal } = useContext(ModalContext);

  const renderInputField = (name, label, required = false, type = 'text') => (
    <label className="text-gray-600">
      {label} {required && <span className="text-red-800">*</span>}
      <input
        type={type}
        name={name}
        className="px-2"
        value={sender[name]}
        onChange={handleSenderChange}
        required={required}
      />
    </label>
  );

  return (
    <div className="absolute inset-0 h-screen w-screen bg-slate-900 bg-opacity-80 z-20 p-16">
      <div className="bg-white p-4 rounded-sm">
        <div className="flex justify-end pb-2">
          <button onClick={() => setModal(!modal)}>x</button>
        </div>
        <hr />
        <form className="grid grid-cols-2 gap-4 pt-4">
          {renderInputField("firstName", "First name", true)}
          {renderInputField("lastName", "Last name", true)}
          {renderInputField("taxID", "Tax Registration Number", true)}
          {renderInputField("IBAN", "IBAN", true)}
          {renderInputField("PO", "PO", true)}
          {renderInputField("email", "Email", false, 'email')}
          {renderInputField("phone", "Phone")}
          {renderInputField("website", "Website")}
          <div className="flex gap-4">
            <button className="py-2 px-4 rounded-md border" onClick={resetSender}>
              Cancel
            </button>
            <button className="py-2 px-4 rounded-md bg-blue-600 text-white" onClick={(e) => handleSave(e)}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SenderModal;

