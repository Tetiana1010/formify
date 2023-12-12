import InvoiceForm from "../components/InvoiceForm";
import InvoiceSettings from "../components/InvoiceSettings"

export default function Root() {
    return (
    <div className="flex flex-col bg-blue-50">
      <header className="bg-blue-700 text-white">
        <h1 className="text-3xl p-4">Document Generator App</h1>
      </header>
      <main className="grid grid-cols-12 gap-4 p-4 mx-auto w-full">
        <InvoiceForm />
        <InvoiceSettings />
      </main>
      <footer className="p-4">
        <p>&copy; 2023 Formify</p>
      </footer>
    </div>
    );
}
