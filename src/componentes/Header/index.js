import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

import { Container, HeaderContent, Links, LinkItem, Icones } from './styles';

import logoImg from '../../assets/logoacordoagora.png';

function Header() {
  return (
    <Container>
      <HeaderContent>
        <img alt="Portal RH" src={logoImg} />

        <Links>
          <LinkItem href="/">Dashboard</LinkItem>
          <LinkItem href="/profissionais">Profissionais</LinkItem>
        </Links>

        <Icones>
          <button type="button">
            <FaFacebookF />
          </button>

          <button type="button">
            <FaWhatsapp />
          </button>
        </Icones>
      </HeaderContent>
    </Container>
  );
}

export default Header;
