import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/watchList";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  let [watchlist , setWatchList] = useState([])

  let handleAddtoWatchlist = (movieObj)=>{
      let newWatchList = [...watchlist , movieObj]
      setWatchList(newWatchList)
      console.log(newWatchList)
  }



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Banner /> <Movies handleAddtoWatchList={handleAddtoWatchlist} />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
