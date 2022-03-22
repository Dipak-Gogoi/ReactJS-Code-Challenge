import React from 'react';
import styled from 'styled-components';
import { useNumberInput } from '../Hooks';

const Number = ({
    testid,
    tabIndex = -1,
    placeholder = '',
    value,
    autoFocus = false,
    setValue = null,
    onSubmit = null,
},
    ref) => {
    const [onKeyUp, onKeyPress, onChange] = useNumberInput({
        setValue,
        onSubmit,
    });
    return (
        <StyledInput
            ref={ref}
            data-testid={testid}
            tabIndex={tabIndex}
            type="number"
            placeholder={placeholder}
            onKeyUp={onKeyUp}
            onKeyPress={onKeyPress}
            onChange={onChange}
            value={value}
            autoFocus={autoFocus}
        />
    )
}

export default React.forwardRef(Number);

const StyledInput = styled.input`
  height: 75px;
  width: 70%;
  border-radius: 20px 0px 0px 20px;
  border: none;
  font-size: calc(20px + 2vmin);
  text-align: center;
`;

