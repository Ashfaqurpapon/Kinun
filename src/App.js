
import { Container, CssBaseline, Grid, Stack, Typography } from "@mui/material";
import Navbar from "./componants/navbar";
import ItemCard from "./Myself/itemCard";
import Swr from "./api/apiData";


import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";



function App() {
 
  return (

    <BrowserRouter>   i
      <CssBaseline />
      <Navbar/>
      <Swr/>
      
    </BrowserRouter>
  );
};
export default App;