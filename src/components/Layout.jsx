import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col bg-blue-50 print:bg-white h-screen gap-4">
      <Header />
      <main className="grid grid-cols-12 gap-4 px-4 print:p-0 mx-auto w-full h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;