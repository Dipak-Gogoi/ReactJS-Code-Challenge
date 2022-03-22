import React from 'react';
import PropTypes from 'prop-types';
import { ROUNDED_BTN_TYPE } from '../CommonFiles/constants';
import { isValidFunction } from '../CommonFiles/utilis';
import styled, { css } from 'styled-components';

const Button = ({ testid, text, onClick, tabIndex, btnType, disabled }) => {
    return (
        <StyledButton
            data-testid={testid}
            onClick={onClick}
            tabIndex={tabIndex}
            disabled={disabled}
            btnType={btnType}
        >
            {text}
        </StyledButton>
    )
}

Button.propTypes = {
    testid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    tabIndex: PropTypes.number.isRequired,
    btnType: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
};

Button.defaultProps = {
    testid: Math.random(),
    text: '',
    onClick: null,
    tabIndex: -1,
    btnType: ROUNDED_BTN_TYPE,
    disabled: false,
};


export default Button;

const defaultButtonCss = css`
  border-radius: 44px;
  width: 375px;
  background-color: var(--defaultbtn);
`;

const submitButtonCss = css`
  width: 30%;
  border-radius: 0px 20px 20px 0px;
  background-color: var(--primarybtn);
  :disabled {
    background-color: var(--disabledbtn);
  }
`;

const StyledButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  border: none;
  height: 4.87rem;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--lightcolor);
  outline: none;
  ${(props) => (props.btnType === 'submit' ? submitButtonCss : defaultButtonCss)}
  :hover {
    cursor: pointer;
  }
`;

