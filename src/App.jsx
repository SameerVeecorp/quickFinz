import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CancellationPolicyPage from "./pages/CancellationPolicyPage";
import CareersPage from "./pages/CareersPage";
import TermsConditionPage from "./pages/TermsConditionPage";
import GlobalPolicyPage from "./pages/GlobalPolicyPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/privay-policy" element={<PrivacyPolicyPage />} />
        <Route
          path="/cancellation-policy"
          element={<CancellationPolicyPage />}
        />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionPage />} />
        <Route path="/global-policy" element={<GlobalPolicyPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
