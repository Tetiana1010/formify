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


const AppProvider = ( {children}) => {
  const [modal, setModal] = useState(false);
  const [sender, setSender] = useState(initialSender);

  const handleSenderChange = (e)  => {
    const { value, name } = e.target;
    setSender(prevSender => ({ ...prevSender, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  const resetSender = () => {
    setSender(initialSender);
  };

  return (
    <Context.Provider value={
        { 
          modal,
          setModal,
          sender, 
          handleSenderChange, 
          resetSender, 
          handleSave
        }
      }>
      {children}
    </Context.Provider>
  );
};

export { Context, AppProvider };
