import React from 'react';

import { useAuth } from '../../context/AuthProvider';
import { FaFacebookF, FaWhatsapp, FaPowerOff } from 'react-icons/fa';

import { Container, HeaderContent, NavBar, LinkItem, Icones, Logout } from './styles';

import logoImg from '../../assets/logoacordoagora.png';

function Header() {
  const { isAuthenticated, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <HeaderContent>
        <img alt="Portal RH" src={logoImg} />

        <NavBar>
          <LinkItem href="/">Dashboard</LinkItem>
          <LinkItem href="/profissionais">Profissionais</LinkItem>
        </NavBar>

        <Icones>
          <button type="button">
            <FaFacebookF />
          </button>

          <button type="button">
            <FaWhatsapp />
          </button>
        </Icones>
      </HeaderContent>
      {isAuthenticated && <Logout>
        <button type="button" alt="Sair" onClick={handleSignOut}>
          <FaPowerOff alt="Sair" />
          <span>Sair</span>
        </button>
      </Logout> }
    </Container>
  );
}

export default Header;
