import React from 'react';

import { Container, HeaderContent, Links, LinkItem, Icones, Icon } from './styles';
import { Row, Column } from '../Grid';

import logoImg from '../../assets/logoacordoagora.png';
import facebookIcon from '../../assets/facebook.jpg';

function Header() {
  return (
    <Container>
      <HeaderContent>
        <img alt="Portal RH" src={logoImg} />

        <Links>
          <LinkItem>Home</LinkItem>
          <LinkItem>Profissionais</LinkItem>
        </Links>
      </HeaderContent>
    </Container>
  );
}

export default Header;
