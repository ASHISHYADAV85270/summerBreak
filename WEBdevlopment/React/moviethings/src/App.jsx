import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import "./APP.css";
import { fetchDataFromApi } from "./utils/api";

// redux testing
import { useDispatch, useSelector } from "react-redux";
import { getApiConfigration, getGenres } from "./store/homeSlice";

import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/searchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
/*





*/

const App = () => {
  /*



  redux testing 





  */
  const dispatch = useDispatch(); // for sending daata
  const { url } = useSelector((state) => {
    // for getting data
    console.log("state", state);
    return state.home;
  });

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log("res", res);

      const url = {
        backdrop: res?.images?.secure_base_url + "original",
        poster: res?.images?.secure_base_url + "original",
        profile: res?.images?.secure_base_url + "original",
      };
      dispatch(getApiConfi0gration(url));
    });
  };

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaTpye/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
