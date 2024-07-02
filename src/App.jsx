import { CssBaseline, colors, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/home/Home";
import {
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_PRODUCTS,
  ROUTE_SIGNUP,
} from "./constants/routes";
import Products from "./components/products/Products";
import useAuthentication from "./useAuthentication";
import { useContext } from "react";
import Protected from "./components/Protected";

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
      path: ROUTE_HOME,
      element: <Home />,
      exact: true,
      // errorElement:<ErrorPage/>,
      children: [],
    },

    {
      path: ROUTE_SIGNUP,
      element: <Signup />,
    },
    {
      path: ROUTE_LOGIN,
      element: <Login />,
    },
    {
      path: ROUTE_PRODUCTS,
      element: (
        <Protected user={user}>
          <Products />
        </Protected>
      ),
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div sx={{ bgcolor: "background.paper" }}>
        <NavBar />
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
