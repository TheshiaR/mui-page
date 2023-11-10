import { Box, Button, Divider, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import "./Login.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{ backgroundColor: "#87a49c" }}
        id="bienvenido"
      >
        <Box>
          <h1>Bienvenido de vuelta</h1>
            <p>¡¡Has vuelto!! Te estabamos esperando </p>
            <Divider color="white"></Divider>
            <p>¿No tiene una cuenta?</p>
            <Link to={'/'}><Button id="btn-s" size="medium" variant="filled">
            Sign Up
          </Button></Link>
        </Box>
      </Grid>
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
          <h1>Log In</h1>
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
            Log In
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
