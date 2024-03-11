import ModalLauncher from "./ModalLauncher.tsx";

const FromForm = (e) => {
  return (
    <div className="flex-1">
      <ModalLauncher userType="sender" />
    </div>
  );
};

export default FromForm;
