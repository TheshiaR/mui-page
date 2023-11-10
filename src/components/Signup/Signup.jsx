import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid id="login" item xs={12} sm={8} md={7}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Sign Up</h1>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            variant="filled"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="surname"
            label="Surname"
            name="surname"
            variant="filled"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            variant="filled"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={isVisible ? "text" : "password"}
            id="password"
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            fullWidth
            id="btn-form"
            size="medium"
            variant="filled"
            sx={{ boxShadow: 15 }}
          >
            Sign Up
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{ backgroundColor: "#87a49c" }}
        id="bienvenido"
      >
        <Box>
          <h1>Bienvenido</h1>
          <p>Esta usted a punto de unirse a la mejor organización del mundo</p>
          <Divider color="white"></Divider>
          <p>¿Tiene una cuenta?</p>
          <Link to={'/login'}><Button id="btn" size="medium" variant="filled">
            Login
          </Button></Link>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Signup;
