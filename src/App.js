import "./App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as React from "react";
import MenuBar from "./component/menuBar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (

    <div className="component">

      <Box sx={{ flexGrow: 1 }}>

        <div className="menu">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <MenuBar></MenuBar>
            </Grid>
            <Grid item xs={9}>
              <div className="gridApi">
                Dashboard
              </div>
            </Grid>
          </Grid>
        </div>

      </Box>

    </div>

  );
}

export default App;
