import { useState } from "react";

import useSenderState from "../hooks/useSenderState";
import useRecipientState from "../hooks/useRecipientState";

import ModalContext from "../context/modal";
import SenderContext from "../context/sender";
import RecipientContext from "../context/recipient";

import Layout from "../components/Layout";

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
