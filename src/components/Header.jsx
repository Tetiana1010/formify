const Header = () => {
  return (
    <header className="bg-blue-700 text-white">
      <h1 className="text-3xl p-4 print:hidden">Document Generator App</h1>
      <h1 className="text-3xl p-4 hidden print:flex">Invoice</h1>
    </header>
  );
};

export default Header;
