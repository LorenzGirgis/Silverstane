import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { PartijenPage } from "./pages/PartijenPage";
import { VacaturesPage } from "./pages/VacaturesPage";
import { FotosPage } from "./pages/FotosPage";
import { ContactPage } from "./pages/ContactPage";
import { FaqPage } from "./pages/FaqPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="partijen" element={<PartijenPage />} />
          <Route path="vacatures" element={<VacaturesPage />} />
          <Route path="fotos" element={<FotosPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FaqPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
