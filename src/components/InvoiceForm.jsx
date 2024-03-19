import ModalLauncher from "./ModalLauncher";
import Note from "./Note";
import Items from './Items'

const InvoiceForm = () => {

  return (
    <div className="col-span-9 flex flex-col gap-8 bg-white p-4 divide-y-2 shadow-sm">
      <div className="flex gap-8">
        <ModalLauncher userType="sender" />
        <ModalLauncher userType="recipient" />
      </div>
      <Items />
      <Note />
    </div>
  );
};

export default InvoiceForm;
