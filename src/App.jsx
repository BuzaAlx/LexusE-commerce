import React, { StrictMode, useState, useEffect } from "react";
import Home from "./containers/Home";
import Model from "./containers/Model";
import Services from "./containers/Services";
import ModelsList from "./containers/ModelsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import ProductLayout from "./components/ProductLayout";
import Poslugi from "./containers/Poslugi";
import Servis from "./containers/Servis";
import Salon from "./containers/Salon";
import Contacts from "./containers/Contacts";
import firebase from "./services/firebase";
import getListOfModifications from "./helpers/getListOfModifications";

// import AppRouter from "routers/AppRouter";

const App = () => {
  // const [automobiles, setAllAutomobiles] = useState([]);

  // const fetchAutomobiles = async () => {
  //   const docs = await firebase.getAutomobiles();

  //   setAllAutomobiles(docs.products);
  // };

  // useEffect(() => {
  //   if (automobiles.length === 0) {
  //     fetchAutomobiles();
  //   }
  // }, []);

  // console.log(getListOfModifications(automobiles));

  // const fetchAutomobiles = async () => {
  //   const docs = await firebase.getSingleAuto("v6Z4rbrDw2IpJiXRTMfK");

  //   // console.log(docs);
  //   setAllAutomobiles({ id: docs.id, ...docs.data() });
  // };

  // useEffect(() => {
  //   if (automobiles.length === 0) {
  //     fetchAutomobiles();
  //   }
  // }, []);

  // console.log(automobiles);

  return (
    <StrictMode>
      {/* <ModelsList /> */}
      <div>asdasd</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Layout />}>
            <Route path="model-list/" element={<ProductLayout />}>
              <Route index element={<ModelsList />} />
              <Route path=":series" element={<ModelsList />} />
            </Route>
            <Route path="model-list/:series/:model" element={<Model />} />
            <Route path="poslugi" element={<Poslugi />} />
            <Route path="servis" element={<Servis />} />
            <Route path="salon" element={<Salon />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<div>error</div>} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
