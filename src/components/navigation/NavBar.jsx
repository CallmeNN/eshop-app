import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import MuiTextField from "../../common/MuiTextField";
import { Stack } from "@mui/material";
import useAuthentication from "../../useAuthentication";
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_PRODUCTS, ROUTE_SIGNUP } from "../../constants/routes";

function NavBar(props) {
  const { AuthCtx } = useAuthentication();
  const { user, logout } = useContext(AuthCtx);
  return (
    <>
    <AppBar position="static" sx={{ background: "#4050b5" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Stack direction="row">
            <ShoppingCart sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: "monospace",
                fontWeight: 500,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              upGrad E-Shop
            </Typography>
          </Stack>

          <Box>
            <MuiTextField
              sx={{ background: "#5c6bc0" }}
              color="#9ca5d8"
              width="340px"
            />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {user ? (
              <>
                <Link to={ROUTE_HOME}>
                  <Button
                    key="Home"
                    sx={[
                      { extDecoration: "underline" },
                      {
                        my: 2,
                        color: "white",
                        display: "block",
                      },
                    ]}
                  >
                    Home
                  </Button>
                </Link>
                <Link to={ROUTE_PRODUCTS}>
                  <Button
                    key="Add Product"
                    sx={[
                      { textDecoration: "underline" },
                      {
                        my: 2,
                        color: "white",
                        display: "block",
                      },
                    ]}
                  >
                    Add Products
                  </Button>
                </Link>
                <Button
                  key="logout"
                  sx={[
                    { background: "#f40157", textDecoration: "none" },
                    {
                      my: 2,
                      color: "white",
                      display: "block",
                    },
                  ]}
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to={ROUTE_LOGIN}>
                  <Button
                    key="Login"
                    sx={[
                      { textDecoration: "underline" },
                      {
                        my: 2,
                        color: "white",
                        display: "block",
                      },
                    ]}
                  >
                    Login
                  </Button>
                </Link>
                <Link to={ROUTE_SIGNUP}>
                  <Button
                    key="Sign Up"
                    sx={[
                      { textDecoration: "underline" },
                      {
                        my: 2,
                        color: "white",
                        display: "block",
                      },
                    ]}
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default NavBar;
