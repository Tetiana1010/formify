import { useState } from "react";

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

const useRecipientState = () => {
  const [recipient, setRecipient] = useState(initialRecipient);

  const handleRecipientChange = (e)  => {
    const { value, name } = e.target;
    setRecipient(prevSender => ({ ...prevSender, [name]: value }));
  };

  const resetRecipient = () => {
    setRecipient(initialRecipient);
  };

  return { recipient, handleRecipientChange, resetRecipient };
};

export default useRecipientState;