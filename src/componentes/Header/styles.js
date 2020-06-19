import styled from 'styled-components';

export const Container = styled.header`
  background: #708090;
  margin-bottom: 20px;
`;

export const HeaderContent = styled.div`
  height: 35px;
  display: flex;

  > img {
    width: 200px;
    height: 35px;
  }
`;

export const Links = styled.div`
  display: flex;
  font-size: 12px;
  color: #ffffff;
  align-items: left;
  margin-left: 10px;
`;

export const LinkItem = styled.a`
  margin-right: 10px;
  padding-top: 8px;
  color: #ffffff;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const Icones = styled.div`
  margin-left: auto;
  padding: 8px 10px 0 10px;

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
