import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  Container,
  AppBar,
  Grid,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Home from "./Home";
import Albums from "./Albums";
import Chanteurs from "./Chanteurs";
import Chansons from "./Chansons";
import DetailAlbum from "./DetailAlbum";
import DetailChanteur from "./DetailChanteur";

export default function Spotify() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon></MenuIcon>
            </IconButton>
          </Link>
          <Typography variant="h6">Spotify MMI</Typography>
          <Link to="/albums">
            <Button color="inherit">Albums</Button>
          </Link>
          <Link to="/chanteurs">
            <Button color="inherit">Chanteurs</Button>
          </Link>
          <Link to="/chansons">
            <Button color="inherit">Chansons</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/albums" element={<Albums />}></Route>
        <Route path="/chanteurs" element={<Chanteurs />}></Route>
        <Route path="/chansons" element={<Chansons />}></Route>
        <Route path="/detailAlbum/:idAlbum" element={<DetailAlbum />}></Route>
        <Route path="/detailChanteur" element={<DetailChanteur />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
