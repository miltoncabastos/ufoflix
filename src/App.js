import React from 'react';
import Menu from './components/Menu'
import Footer from './components/Footer'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'

import data from './data/dados_iniciais.json'

function App() {
  return (
    <div style={{backgroundColor:"#141414"}}>
      <Menu />
      
      <BannerMain 
        videoTitle="Alienígenas do Passado - Segredos dos exoplanetas"
        videoDescription ="No Egito se escondem muitos dos mistérios maiores da humanidade. Descubra tudo sobre alguns dos personagens mais significantes da história."
        url="https://www.youtube.com/watch?v=eLHzUazQzro"
      />
      
      { data.categorias.map(item => <Carousel category = {item}/>) }

      <Footer />
    </div>
  );
}

export default App;
