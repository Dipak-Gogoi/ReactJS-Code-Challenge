import React from 'react';
import PropTypes from 'prop-types';
import { DATASETS, ROUNDED_BTN_TYPE } from '../CommonFiles/constants';
import Button from '../Button/Button';
import styled from 'styled-components';
// import { isValidFunction } from '../../common/utils';

const Reload = ({ onClick }) => {
    return (
        <FormContainer data-testid="reload-container">
            <ReloadContainer>
                {DATASETS.map((item) => (
                    <Button
                        key={item.onClickArg}
                        testid={`btn-${item.onClickArg}`}
                        text={item.buttonText}
                        btnType={ROUNDED_BTN_TYPE}
                        onClick={(e) => onClick(e, item.onClickArg)}
                    />
                ))}
            </ReloadContainer>
        </FormContainer>
    )
}

Reload.propTypes = {
    onClick: PropTypes.func.isRequired,
};

Reload.defaultProps = {
    onClick: null,
};

export default Reload;

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100px;
  min-width: 100vw;
  align-items: center;
  justify-content: space-around;
  background-color: var(--secondarybg);
`;

const ReloadContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  flex-wrap: wrap;
  min-width: 50vw;
  height: 125px;
  & button {
    margin: 10px;
  }
  @media (min-width: 600px) {
    min-width: 55vw;
  }
`;
