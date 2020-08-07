import React from 'react';

import { NavWrapper } from './styles';
import { MdDehaze } from 'react-icons/md';


export default function() {
  return(
    <NavWrapper>
      <div className="navBar">
        <div className="logo-menu">
        <MdDehaze size={32} color="#FFF"/>
          <h3>LOGO</h3>
        </div>
        <div className="contato">
          <p>Fale com o autor (21) 99999-999</p>
        </div>
      </div>
    </NavWrapper>
  );
}