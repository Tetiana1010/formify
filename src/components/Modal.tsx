import React, { useState } from "react";

const Modal = ({ handleModal }) => {
  const [company, setCompany] = useState("");
  const [taxID, setTaxID] = useState("");
  const [IBAN, setIBAN] = useState("");
  const [PO, setPO] = useState("");
  const [firstName, setFirsttName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const handleSave = () => {
    console.log(company, taxID, IBAN, PO, firstName, lastName, email, website);
  };

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
            <input
              type="text"
              className="px-2"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </label>
          <label className="text-gray-600">
            Tax Registration Number <span className="text-red-800">*</span>
            <input
              type="text"
              className="px-2"
              value={taxID}
              onChange={(e) => setTaxID(e.target.value)}
              required
            />
          </label>
          <label className="text-gray-600">
            IBAN <span className="text-red-800">*</span>
            <input
              type="text"
              className="px-2"
              value={IBAN}
              onChange={(e) => setIBAN(e.target.value)}
              required
            />
          </label>
          <label className="text-gray-600">
            PO
            <input
              type="text"
              className="px-2"
              value={PO}
              onChange={(e) => setPO(e.target.value)}
              required
            />
          </label>
          <label>
            First name
            <input
              type="text"
              className="px-2"
              value={firstName}
              onChange={(e) => setFirsttName(e.target.value)}
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              className="px-2"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              className="px-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Web site
            <input
              type="web"
              className="px-2"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>
          <div className="flex gap-4">
            <button className="py-2 px-4 rounded-md border">Cancel</button>
            <button
              className="py-2 px-4 rounded-md bg-blue-600 text-white"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
