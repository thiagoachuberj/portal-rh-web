import styled from 'styled-components';

export const Container = styled.header`
  background: #2c3e50;
  height: 55px;
  margin-bottom: 10px;
  display: flex;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;

  > img {
    width: 200px;
    height: 55px;
    float: left;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  background-color: #2c3e50;
`;

export const LinkItem = styled.a`
  padding: 19px 10px;
  text-decoration: none;
  text-align: center;
  font-size: 15px;
  color: #ffffff;

  &:hover {
    background-color: #ecf0f1;
    color: #2c3e50;
  }
`;

export const Icones = styled.div`
  margin-left: auto;
  padding: 17px 10px 0 10px;

  button {
    background: transparent;
    border-style: none;
    margin-left: 13px;
  }

  svg {
    color: #ffffff;
    width: 15px;
    height: 20px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Logout = styled.div`
  padding: 11px 20px 0 10px;
  text-align: center;

  &:hover {
    opacity: 0.8;
    transition: 1s;
  }

  button {
    background: transparent;
    border-style: none;
  }

  svg {
    color: #ffffff;
    width: 20px;
    height: 15px;
    font-weight: bold;
  }

  span {
    color:#ffffff;
    font-size: 14px;
    padding-bottom: 10px;
  }
`;
