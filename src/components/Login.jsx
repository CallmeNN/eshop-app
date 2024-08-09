import { useEffect, useContext } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE_PRODUCTS, ROUTE_SIGNUP } from "../constants/routes";
import useAuthentication from "../useAuthentication";
import { Alert } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link href="https://mui.com/">myPage</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const { AuthCtx } = useAuthentication();
  const { login, user, error } = useContext(AuthCtx);
  const { from } = (location && location.state) || "ROUTE_PRODUCTS";

  useEffect(() => {
    user && navigate(from);
  }, [user, from]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    await login({ email: data.get("email"), password: data.get("password") });
    navigate(ROUTE_PRODUCTS);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "pink.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "blue.main" }}
          >
            Sign In
          </Button>
          <Box>
            <RouteLink to={ROUTE_SIGNUP}>
              {"Don't have an account? Sign Up"}
            </RouteLink>
          </Box>
        </Box>
      </Box>
      <Box>{error ? <Alert severity="warning">{error}</Alert> : ""}</Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
