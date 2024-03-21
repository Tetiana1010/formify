import { useState } from "react";

const initialSender = {
  firstName: '',
  lastName: '',
  taxID: '',
  IBAN: '',
  PO: '',
  email: '',
  phone: '',
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

export default useSenderState;