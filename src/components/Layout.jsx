import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-4 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <Outlet />
      </main>
    </>
  );
}
