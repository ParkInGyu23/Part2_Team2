// 버튼

import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from './Palette.styled';

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${(props) => {
    if (props.Full) return '100%';
    else return 'auto';
  }};
  max-width: 477px;
  height: auto;
  font-size: ${(props) => {
    if (props.Small) return '0.81rem';
    else return '0.88rem';
  }};
  font-weight: 700;
  color: ${palette.white};
  text-align: center;
  padding: ${(props) => {
    if (props.Small) return '8px 15px';
    else return '14px 15px';
  }};
  border-radius: ${(props) => {
    if (props.Round) return '100px';
    else return '3px';
  }};
  border: none;
  background: linear-gradient(90deg, ${palette.primary} 0%, ${palette.secondary} 100%);
  transition: all 0.5s;

  &:active {
    filter: brightness(0.6);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${palette.gray100};
      cursor: not-allowed;
    `}
`;

function Button({ children, disabled, ...props }) {
  return (
    <StyledButton disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
