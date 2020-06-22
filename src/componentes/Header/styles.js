import styled from 'styled-components';

export const Container = styled.header`
  background: #2c3e50;
  height: 55px;
  margin-bottom: 10px;
`;

export const HeaderContent = styled.div`
  display: flex;

  > img {
    width: 200px;
    height: 55px;
  }
`;

export const Links = styled.div`
  align-items: left;
  margin-left: 10px;
  padding-top: 19px;
`;

export const LinkItem = styled.a`
  margin-right: 10px;
  text-decoration: none;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const Icones = styled.div`
  margin-left: auto;
  padding: 19px 10px 0 10px;

  button {
    background: transparent;
    border-style: none;
    margin-left: 10px;
  }

  svg {
    color: #ffffff;
    width: 15px;
    height: 15px;
  }
`;
