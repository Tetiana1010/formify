import { useState } from "react";

import ModalContext from "../context/modal";
import SenderContext from "../context/sender";
import RecipientContext from "../context/recipient";

import Layout from "../components/Layout";

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

const initialRecipient = {
  company: '',
  taxID: '',
  IBAN: '',
  PO: '',
  firstName: '',
  lastName: '',
  email: '',
  website: '',
};

const useSenderState = () => {
  const [sender, setSender] = useState(initialSender);

  const handleSenderChange = (e)  => {
    const { value, name } = e.target;
    setSender(prevSender => ({ ...prevSender, [name]: value }));
  };

  const resetSender = () => {
    setSender(initialSender);
  };

  return { sender, handleSenderChange, resetSender };
};

const useRecipientState = () => {
  const [recipient, setRecipient] = useState(initialRecipient);

  const handleRecipientChange = (e)  => {
    const { value, name } = e.target;
    setRecipient(prevSender => ({ ...prevSender, [name]: value }));
  };

  const resetRecipient = () => {
    setRecipient(initialSender);
  };

  return { recipient, handleRecipientChange, resetRecipient };
};

export default function Root() {
  const [modal, setModal] = useState(false);
  const { sender, handleSenderChange, resetSender } = useSenderState();
  const { recipient, handleRecipientChange, resetRecipient } = useRecipientState();

  const handleSave = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <SenderContext.Provider value={{ 
          modal,
          setModal,
          sender, 
          handleSenderChange, 
          resetSender, 
          handleSave
        }}>
          <RecipientContext.Provider  value={{ 
          modal,
          setModal,
          recipient, 
          handleRecipientChange, 
          resetRecipient, 
          handleSave
        }}>
            <Layout />
          </RecipientContext.Provider>
      </SenderContext.Provider>
    </ModalContext.Provider>
  );
};
