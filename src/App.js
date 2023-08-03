import "./App.css";
import HomePage from "./Screens/HomePage";
import EducationPage from "./Screens/EducationPage";
import ProjectPage from "./Screens/ProjectPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ButtonToTop from "./Components/ButtonToTop";
import RootLayout from "./Screens/RootLayout";
import Contact from "./Components/Contact";
import MobileWarning from "./Screens/MobileWarningPage";
import WelcomePage from "./Screens/WelcomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <WelcomePage /> },
        { path: "/home", element: <HomePage /> },
        { path: "/project", element: <ProjectPage /> },
        { path: "/education", element: <EducationPage /> },
      ],
    },
  ]);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  
  return isMobile ? (
    <MobileWarning />
  ) :  (
    <div className="App">
      <RouterProvider router={router} />
      
      <Contact />
    </div>
  );
}

export default App;
