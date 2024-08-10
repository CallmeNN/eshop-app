import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/home/Home";
import {
  ROUTE_ADD_PRODUCTS,
  ROUTE_LOGIN,
  ROUTE_PRODUCTS,
  ROUTE_SIGNUP,
} from "./constants/routes";
import Products from "./components/products/Products";
import useAuthentication from "./useAuthentication";
import { useContext } from "react";
import ProtectedRoute from "./common/ProtectedRoute";
import ProductsForm from "./components/manageProducts/ProductsForm";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fafafa",
      card: "#ffffff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      main: "#001E3C",
    },
    success: {
      main: "#07bc0b",
    },
    pink: {
      main: "#f40157",
    },
    blue: {
      main: "#3f51b5",
    },
    gray: {
      main: "#E0E0E0",
    },
  },
});

function App() {
  const { AuthCtx } = useAuthentication();
  const { user } = useContext(AuthCtx);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: ROUTE_SIGNUP, element: <Signup /> },
        { path: ROUTE_LOGIN, element: <Login /> },
        {
          path: ROUTE_PRODUCTS,
          element: (
            <ProtectedRoute validate={() => !!user} fallbackRoute={ROUTE_LOGIN}>
              <Products />
            </ProtectedRoute>
          ),
        },
        {
          path: ROUTE_ADD_PRODUCTS,
          element: (
            <ProtectedRoute
              validate={() => !!user && user?.roles[0] === "ADMIN"}
              fallbackRoute={
                !!user && user?.roles[0] === "USER" ? "/" : ROUTE_LOGIN
              }
            >
              <ProductsForm />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div sx={{ bgcolor: "background.paper" }}>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
