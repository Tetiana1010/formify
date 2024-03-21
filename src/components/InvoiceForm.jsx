import SenderLauncher from "./SenderLauncher";
import Note from "./Note";
import Items from './Items'

const InvoiceForm = () => {

  return (
    <div className="col-span-9 print:col-span-12 flex flex-col gap-8 bg-white p-4 divide-y-2 shadow-sm print:shadow-none">
      <div className="flex gap-8">
        <SenderLauncher />
      </div>
      <Items />
      <Note />
    </div>
  );
};

export default InvoiceForm;
