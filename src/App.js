import "./App.css";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Sidebar from "./component/Sidebar/Sidebar";
import MyIvoices from "./Pages/MyIvoices";
import Overview from "./Pages/Overview";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TabPanel from "./component/TabPanel";
import store from './store'
import { Provider } from "react-redux";
// import { PersonRemoveAlt1 } from "@mui/icons-material";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Sidebar />

              </Grid>
              <Grid item xs={9}>
                <TabPanel />
                <Provider store={store}>
                </Provider>

                <Routes>
                  <Route path="/Overview" element={<Overview />} />
                  <Route path="/My%20Ivoices" element={<MyIvoices />} />
                </Routes>

              </Grid>
            </Grid>
          </Box>
        </div>

      </BrowserRouter>

    </>

  );
}

export default App;
