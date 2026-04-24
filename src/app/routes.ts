import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import AnalyzePage from "./components/AnalyzePage";
import ContactPage from "./components/ContactPage";
import FeaturesPage from "./components/FeaturesPage";
import PrivacyPage from "./components/PrivacyPage";
import TermsPage from "./components/TermsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "analyze", Component: AnalyzePage },
      { path: "contact", Component: ContactPage },
      { path: "features", Component: FeaturesPage },
      { path: "privacy", Component: PrivacyPage },
      { path: "terms", Component: TermsPage },
    ],
  },
]);
