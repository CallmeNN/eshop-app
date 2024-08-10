import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Alert,
  Button,
  Container,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import apiconfig from "../../services/apiconfig";
import { createProductApi } from "../../services/endpoint";
import CreateableSelect from "../../common/components/CreateableSelect";

export default function ProductsForm() {
  const [alert, setAlert] = React.useState({
    message: "",
    severity: "",
    open: false,
  });

  const [category, setCategory] = React.useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({ ...alert, open: false });
  };

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const body = {
      name: data.get("name"),
      manufacturer: data.get("manufacturer"),
      availableItems: parseInt(data.get("availableItems")),
      price: parseFloat(data.get("price")),
      imageUrl: data.get("imageUrl") || null,
      description: data.get("description") || null,
      category: category
    };
    try {
      await await apiconfig({
        method: "POST",
        body,
        endpoint: createProductApi,
      });
      setAlert({
        message: `Product ${body.name} added successfully!`,
        severity: "success",
        open: true,
      });
    } catch (error) {
      console.error(error);
      setAlert({
        message: "Failed to add product.",
        severity: "error",
        open: true,
      });
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {alert.message && (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={alert.open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              variant="filled"
              severity={alert.severity}
              sx={{ width: "100%" }}
            >
              {alert.message}
            </Alert>
          </Snackbar>
        )}
        <Typography component="h1" variant="h5">
          Add Product
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                name="name"
                label="Name"
                defaultValue="Comfortable Chair"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="manufacturer"
                id="manufacturer"
                label="Manufacturer"
                defaultValue="Nilkamal"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <CreateableSelect
                onChange={handleCategoryChange}
                isClearable
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="availableItems"
                id="availableItems"
                label="Available Items"
                defaultValue={10}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="price"
                id="price"
                label="Price"
                defaultValue={10000}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="imageUrl"
                id="imageUrl"
                label="Image URL"
                type="search"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                id="description"
                label="Product Description"
                type="search"
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "blue.main" }}
          >
            Save Product
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
