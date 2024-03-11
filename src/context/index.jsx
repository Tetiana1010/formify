import React, { useState, createContext } from "react";

const Context = createContext(null);

const initialSender = {
  company: '',
  taxID: '',
  IBAN: '',
  PO: '',
  firstName: '',
  lastName: '',
  email: '',
  website: '',
};

const AppProvider = ({ children }) => {
  const [sender, setSender] = useState(initialSender);

  const handleSenderChange = (e) => {
    const { value, name } = e.target;
    setSender(prevSender => ({ ...prevSender, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saved sender:", sender);
  };

  const resetSender = () => {
    setSender(initialSender);
  };

  return (
    <Context.Provider value={{ sender, handleSenderChange, resetSender, handleSave }}>
      {children}
    </Context.Provider>
  );
};

export { Context, AppProvider };
