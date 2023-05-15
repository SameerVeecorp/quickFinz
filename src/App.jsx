import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CancellationPolicyPage from "./pages/CancellationPolicyPage";
import CareersPage from "./pages/CareersPage";
import TermsConditionPage from "./pages/TermsConditionPage";
import GlobalPolicyPage from "./pages/GlobalPolicyPage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import LoginHeader from "./components/LoginHeader";
import SupportPage from "./pages/SupportPage";
import MediaPage from "./pages/MediaPage";
import PageNotFound from "./pages/PageNotFound";

const noHeaderPath = ["/signUp", "/login"];

function App() {
  const location = useLocation();

  return (
    <>
      {noHeaderPath.includes(location.pathname) ? <LoginHeader /> : <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/privay-policy" element={<PrivacyPolicyPage />} />
        <Route
          path="/cancellation-policy"
          element={<CancellationPolicyPage />}
        />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionPage />} />
        <Route path="/global-policy" element={<GlobalPolicyPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/media-room" element={<MediaPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {noHeaderPath.includes(location.pathname) ? <></> : <Footer />}
    </>
  );
}

export default App;
