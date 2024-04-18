
import { Container, CssBaseline, Grid, Stack, Typography } from "@mui/material";
import Navbar from "./componants/navbar";
import Swr from "./api/apiData";
import ItemCard from "./Myself/itemCard";
import ReturnApi from "./api/returnapi";


import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";



function App() {

  const products=Swr();
  console.log(products);
 
  return (

    <BrowserRouter>   

      <CssBaseline />
      <Navbar products={products}/>
      <ItemCard products={products}/>
     

    </BrowserRouter>
  );
};
export default App;