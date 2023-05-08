import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from "./pages/LogInPage/LogInPage";
import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogInPage />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

export default function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
