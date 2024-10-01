import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
// import Projects from "./pages/Projects/Projects";
import Contact from "./pages/ContactUs/ContactUs";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 400,
      easing: "ease-in",
      delay: 50,
    });
    AOS.refresh();
  }, []);

  // Create a router using `createBrowserRouter`
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />, // Define the Home component for "/"
    },
    // {
    //   path: "/projects",
    //   element: <Projects />, // Define the Services component for "/services"
    // },
    {
      path: "/contact",
      element: <Contact />, // Define the Contact component for "/contact"
    },
  ]);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      {/* Provide the router to your app */}
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
