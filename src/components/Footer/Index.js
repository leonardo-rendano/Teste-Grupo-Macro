import React from 'react';

import { FooterWrap } from './style.js';

import { FaInstagram } from 'react-icons/fa';


export default function Footer() {
  return(
    <FooterWrap>
      <p>LOGO</p>
      <FaInstagram className="instagram-icon"/>
      <p>Fale com o autor (21) 99999-999</p>
    </FooterWrap>
  );
}