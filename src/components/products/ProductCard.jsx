import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useAuthentication from "../../useAuthentication";

export default function ProductCard({ title, price, description, image }) {
  const { AuthCtx } = useAuthentication();
  const { user } = React.useContext(AuthCtx);
  return (
    <Card
      sx={{
        width: 345,
        minHeight: 650,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardMedia
          sx={{
            width: "50%",
            height: { xs: "200px", sm: "250px" },
            objectFit: "cover",
            margin: "auto",
            padding: "8px",
          }}
          component="img"
          image={image}
          alt="product image"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              gap: "2em",
              justifyContent: "space-between",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {price}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ mt: "auto", display: "flex", justifyContent: "space-between" }}
      >
        <Button size="small" variant="contained">
          Buy
        </Button>
        {user && user?.roles[0] === "ADMIN" && (
          <CardActions>
            <Button size="small">
              <EditIcon />
            </Button>
            <Button size="small">
              <DeleteIcon />
            </Button>
          </CardActions>
        )}
      </CardActions>
    </Card>
  );
}
