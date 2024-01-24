import React from "react";

interface UserDetailsProps {
  user: 'sender' | 'recipient';
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => (
  <>
    <h2>{user} name</h2>
    <p>{user} contact</p>
  </>
);

interface ModalLauncherProps {
  userType: 'sender' | 'recipient';
}

const ModalLauncher: React.FC<ModalLauncherProps> = ({ userType }) => (
  <div className="border border-white hover:border-gray-200 hover:border-dashed">
    <UserDetails user={userType} />
  </div>
);

export default ModalLauncher;
