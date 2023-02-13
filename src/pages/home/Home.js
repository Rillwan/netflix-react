import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import RowPost from '../../components/RowPost/RowPost';
import { action,animation,music,popular, tvshows, upcoming } from "../../urls";


function Home() {
  return (
    <div className='HOME'>
      <NavBar url={upcoming} />
      <Banner />
      <RowPost url={popular} title='POPULAR ON NETFLIX' tag={"popular"}/>
      <RowPost url={action} title='ACTION' isSmall tag={'movies'}/>
      <RowPost url={tvshows} title='TV SHOWS' isSmall tag={'tvshows'}/>
      <RowPost url={animation} title='ANIMATION' isSmall tag={'animation'}/>
      <RowPost url={music} title='MUSIC' isSmall tag={'music'}/>
      <Footer />
    </div>
  )
}

export default Home
