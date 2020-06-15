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

export const LinkItem = styled.h3`
  margin-right: 5px;
`;

export const Icones = styled.h3`
  font-size: 16px;
  float: right;
`;

export const Icon = styled.h3`
  margin-left: 10px;
`;
