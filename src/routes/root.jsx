import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root() {
    return (
    <div className="flex flex-col bg-blue-50 h-screen gap-4">
      <Header />
      <main className="grid grid-cols-12 gap-4 px-4 mx-auto w-full h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
    );
}
