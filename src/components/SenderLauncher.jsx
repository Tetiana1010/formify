import React, { useContext } from "react";

import ModalContext from '../context/modal';
import SenderModal from "./SenderModal"
import SenderContext from "../context/sender";

const SenderLauncher  = () => {
  const { modal, setModal } = useContext(ModalContext);
  const { sender } = useContext(SenderContext);

  const {  firstName, lastName, taxID, IBAN, PO, website } = sender;

  return (
    <>
      <div
        className="flex-1 flex flex-col p-2 border border-white hover:border-gray-200 hover:border-dashed"
        onClick={() => setModal(!modal)}
      >
        <h2 className="pb-2">From</h2>
        <h3 className="font-semibold">{firstName.length > 1 && lastName.length > 1 ? firstName + ' '  + lastName : 'Sender name'}</h3>
        <p className="text-sm">Sender contact details</p>
      </div>
      {modal && ( 
         <SenderModal /> 
      )}
    </>
  );
};

export default SenderLauncher;
