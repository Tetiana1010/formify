import React, { useContext } from "react";

import SenderContext from "../context/sender";
import Modal from "./Modal"

const capitalizeFirstLetter = (word ) =>
  word.charAt(0).toUpperCase() + word.slice(1);

const UserDetails  = ({ user }) => {
  const correctedUser = capitalizeFirstLetter(user);
  const { modal, setModal } = useContext(SenderContext);

  return (
    <>
      <div
        className="flex-1 flex flex-col p-2 border border-white hover:border-gray-200 hover:border-dashed"
        onClick={() => setModal(!modal)}
      >
        <h2 className="pb-2">{user === "sender" ? "From" : "To"}</h2>
        <h3 className="font-semibold">{correctedUser} name</h3>
        <p className="text-sm">{correctedUser} contact</p>
      </div>
      {modal && (
        <Modal />
      )}
    </>
  );
};

const ModalLauncher = ({ userType }) => (
  <UserDetails user={userType} />
);

export default ModalLauncher;
