import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1360px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  height: 100%;
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
  border: 1px solid #000000;
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
  border: 1px solid #cccccc;
`;

function getWidthGrid(value) {
  if (!value) return;

  const width = (value / 12) * 100;
  // eslint-disable-next-line consistent-return
  return `width: ${width}%;`;
}

export const Column = styled.div`
  float: left;
  padding: 0.25rem;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid yellow;

  @media only screen and (min-width: 768px) {
    ${({ mobile }) => mobile && getWidthGrid(mobile)}
  }

  @media only screen and (min-width: 768px) {
    ${({ tablet }) => tablet && getWidthGrid(tablet)}
  }

  @media only screen and (min-width: 1000px) {
    ${({ desktop }) => desktop && getWidthGrid(desktop)}
  }
`;
