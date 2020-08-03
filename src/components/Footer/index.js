import React from 'react';
import { FooterBase } from './styles';
import img from '../../assets/img/logo.png';

function Footer() {
  return (
    <FooterBase>
        <img className="fofuflix" src={img} alt="Logo Alura" />
      <p>
        Criado por Jemima durante a Imersão React da Alura
       
      </p>
    </FooterBase>
  );
}

export default Footer;
