import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { BierenPage } from "./pages/BierenPage";
import { OverOnsPage } from "./pages/OverOnsPage";
import { NieuwsPage } from "./pages/NieuwsPage";
import { ContactPage } from "./pages/ContactPage";
import { FaqPage } from "./pages/FaqPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="bieren" element={<BierenPage />} />
          <Route path="over-ons" element={<OverOnsPage />} />
          <Route path="nieuws" element={<NieuwsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FaqPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
