import React from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import RowPost from "./components/RowPost/RowPost";
import { action,animation,music,popular, tvshows } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={popular} title='POPULAR ON NETFLIX' />
      <RowPost url={action} title='ACTION' isSmall tag={'movies'}/>
      <RowPost url={tvshows} title='TV SHOWS' isSmall tag={'tvshows'}/>
      <RowPost url={animation} title='ANIMATION' isSmall tag={'animation'}/>
      <RowPost url={music} title='MUSIC' isSmall tag={'music'}/>
      <Footer />
    </div>
  );
}

export default App;
