import styled from 'styled-components';
import { palette } from './Palette.styled';

import IconCredit from '../assets/images/IconCredit';

// 라디오박스
export const RadioButton = ({ children, id, name, disabled, checked, onChange }) => {
  const handleChange = (event) => {
    if (disabled) return;
    onChange?.(event);
  };

  return (
    <>
      <CheckCircle
        type="radio"
        id={id}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      {children && <label htmlFor={id}>{children}</label>}
    </>
  );
};

// 라디오박스 스타일
export const CheckCircle = styled.input`
  position: relative;
  appearance: none;
  display: inline-block !important;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${(props) => (props.checked ? palette.primary : palette.gray300)};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) => (props.checked ? palette.primary : palette.gray300)};
    transition: background-color 0.2s ease-in-out;
    content: '';
  }

  + label {
    margin-left: 4px;
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

// input (아이콘 + 에러까지 포함된 인풋)
export const InputWithIcon = ({ width, error, errorMessage, ...props }) => {
  const hasError = Boolean(error);

  return (
    <IconInput width={width}>
      <div>
        <Input width="100%" error={hasError} {...props} />
        <IconCredit width={14} height={20} />
      </div>
      {hasError && errorMessage && <InputError>{errorMessage}</InputError>}
    </IconInput>
  );
};

// input 스타일
export const IconInput = styled.div`
  position: relative;
  width: ${({ width }) => {
    if (width === undefined || width === null) return '100%';
    if (typeof width === 'number') return `${width}px`;
    return width;
  }};
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  gap: 6px !important;

  > div {
    position: relative;
    width: 100%;

    > svg {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
  }
`;

export const Input = styled.input`
  width: ${({ width }) => {
    if (width === undefined || width === null) return '100%';
    if (typeof width === 'number') return `${width}px`;
    return width;
  }};
  font-size: 20px;
  font-weight: 700;
  color: ${palette.white};
  padding: 16px 48px 16px 16px;
  border: 1px solid ${({ error }) => (error ? palette.error : palette.gray300)};
  border-radius: 4px;
  background: #272f3d;

  &::placeholder {
    color: ${palette.gray200};
  }
  /* 포커스 시에도 에러일 땐 항상 error 컬러 유지 */
  &:focus,
  &:focus-visible {
    outline: none;
    border-color: ${({ error }) => (error ? palette.error : palette.gray300)};
  }
`;

export const InputError = styled.p`
  font-size: 12px;
  color: ${palette.error};
`;
