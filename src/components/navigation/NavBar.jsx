import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useContext, useMemo, useState } from "react";
import MuiTextField from "../../common/MuiTextField";
import { Stack } from "@mui/material";
import useAuthentication from "../../useAuthentication";

function NavBar(props) {
  const { AuthCtx } = useAuthentication();
  const { user,logout } = useContext(AuthCtx);

  const pages = useMemo(() => {
    if (user) return ["Home", "Add Product", "Logout"];
    else return ["Login", "Sign Up"];
  }, [user]);

  return (
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
            {pages.map((page) => (
              <Button
                key={page}
                sx={[
                  page === "Logout" ? {
                    background: "#f40157",
                    textDecoration: "none",
                  }:
                  {
                    textDecoration: "underline",
                  },
                  {
                    my: 2,
                    color: "white",
                    display: "block",
                  }
                ]}
                onClick={page==='Logout'?logout:()=>{}}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
