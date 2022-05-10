
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import * as React from "react";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


function MenuBar() {
  return (

    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Item>
          <a href="Overview">Overview</a>
        </Item>
        <Item>
          <a href="My Ivoices">My Ivoices</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
        <Item>
          <a href="exemple">exemple</a>
        </Item>
      </Grid>
    </Grid>


  )
}

export default MenuBar;
