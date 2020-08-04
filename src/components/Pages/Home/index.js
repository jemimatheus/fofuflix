import React from 'react';
import Menu from '../../Menu/index'
import dadosIniciais from '../../../data/dados_iniciais.json';
import BannerMain from '../../BannerMain/index';
import Carousel from '../../Carousel/index';
import Footer from '../../Footer/index';


function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Os Bebês são as criaturinhas mais Engraçadas e fofas do Mundo! Eles tem as gargalhadas mais gostosas e nos deixam facilmente encantados. Separei uma coletânea maravilhosa com as risadas mais engraçadas de bebês de todos os tipos e lugares do mundo. Sente-se, se prepare e dê muitas risadas com os bebês mais engraçados do Mundo!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </div>
  );
}


export default Home;
