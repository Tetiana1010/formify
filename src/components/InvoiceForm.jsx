import From from "./From";
import ToForm from './ToForm';
import Note from "./Note";

const InvoiceForm = () => {
    return (<div className="col-span-9 flex flex-col gap-8 bg-white p-4 divide-y-2 shadow-sm">
        <div className="flex gap-8">
            <From />
            <ToForm />
        </div>
        <Note />
    </div> );
}
 
export default InvoiceForm;
