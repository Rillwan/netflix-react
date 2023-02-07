import React from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost />
      <RowPost />
      <RowPost />
      <Footer />
    </div>
  );
}

export default App;
