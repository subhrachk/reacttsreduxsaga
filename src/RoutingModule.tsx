import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Counter } from "./Components/Counter/Counter";
import { Blogs } from "./Components/Blogs/Blogs";
import { Button } from "@mui/material";

export const RoutingModule = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Redux ToolKit Demo</h1>
          <NavLink to="/">
            <Button variant="outlined">Home</Button>
          </NavLink>
          <NavLink to="counter">
            <Button variant="outlined">Counter</Button>
          </NavLink>
          <NavLink to="blogs"><Button variant="outlined">Blogs</Button></NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="counter" element={<Counter />}>
            Counter
          </Route>
          <Route path="blogs" element={<Blogs />}>
            Blogs
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};
