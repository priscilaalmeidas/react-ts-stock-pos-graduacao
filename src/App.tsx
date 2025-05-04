import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <div>404 Not Found</div>,
    },
    {
      path: "/details/:id",
      element: <Details />,
      errorElement: <div>404 Not Found</div>,
    },
  ]);
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}
