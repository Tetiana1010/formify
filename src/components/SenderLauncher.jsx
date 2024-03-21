import React, { useContext } from "react";
import ModalContext from '../context/modal';
import SenderContext from "../context/sender";
import SenderModal from "./SenderModal";

const SenderLauncher = () => {
  const { modal, setModal } = useContext(ModalContext);
  const { sender } = useContext(SenderContext);
  const { firstName, lastName, taxID, IBAN, PO, phone, website, email } = sender;

  const renderSenderInfo = () => {
    if (firstName.length > 1 && lastName.length > 1) {
      return (
        <>
          <h3 className="text-lg font-bold">{firstName} {lastName}</h3>
          <ul>
            {taxID && <li><b>Tax ID:</b> {taxID}</li>}
            {IBAN && <li><b>IBAN:</b> {IBAN}</li>}
            {PO && <li><b>PO:</b> {PO}</li>}
            {email && <li><b>Email:</b> {email}</li>}
            {phone && <li><b>Tel:</b> {phone}</li>}
            {website && <li><b>Web:</b> {website}</li>}
          </ul>
        </>
      );
    } else {
      return (
        <>
          <h3>Sender name</h3>
          <p className="text-sm">Sender contact details</p>
        </>
      );
    }
  };

  return (
    <>
      <div
        className="flex-1 flex flex-col p-2 border border-white hover:border-gray-200 hover:border-dashed"
        onClick={() => setModal(!modal)}
      >
        <h2 className="pb-2">From</h2>
        {renderSenderInfo()}
      </div>
      {modal && <SenderModal />}
    </>
  );
};

export default SenderLauncher;
