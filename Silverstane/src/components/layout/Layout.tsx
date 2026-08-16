import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "../ui/ScrollToTop";

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen header-offset">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
