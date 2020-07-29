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
        videoTitle="Alienígenas do Passado - O Mistério de Nan Madol"
        videoDescription ="Giorgio Tsoukalos explora uma série de pequenas ilhas na Micronésia construídas usando 250 milhões de toneladas de rochas vulcânicas. As lendas locais mencionam visitantes estranhos que fizeram as rochas flutuarem para formá-las."
        url="https://www.youtube.com/watch?v=S57KNsVG8_A&t=2170s"
      />
      
      { data.categorias.map(item => <Carousel category = {item}/>) }

      <Footer />
    </div>
  );
}

export default App;
