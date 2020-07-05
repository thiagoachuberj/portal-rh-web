import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

export const Container = styled.div.attrs((props) => ({
  isFocused: props.isFocused,
  isErrored: props.isErrored,
}))`
  background: #b6b2b2;
  border-radius: 5px;
  width: 100%;

  border: 2px solid #f5f5f5;
  color: #f5f5f5;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #2c3e50;
      border-color: #2c3e50;
    `}

  & + div {
    margin-top: 8px;
  }

  .fieldSelect {
    background: #b6b2b2;
    border: 0;
    border-radius: 4px;
    height: 0;
    flex: 1;
    padding: 0 0;
    color: #2c3e50;

    > div {
      background-color: #b6b2b2;

      > div {
        background-color: #b6b2b2;
      }
      /* & + div {
        background-color: #b6b2b2;
        :hover {
          border-color: #b6b2b2;
        }
      } */
    }
  }

  /* div {
    background: #b6b2b2;
    border: 0;
    border-radius: 4px;
    height: 44px;
    flex: 1;
    padding: 0 0;
    color: #2c3e50;

    %::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  } */
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #ffffff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
