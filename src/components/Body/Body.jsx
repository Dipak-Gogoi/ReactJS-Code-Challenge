import React from 'react';
import { useStatistics } from '../Hooks';
import { isValidFunction } from '../CommonFiles/utilis';
import styled from 'styled-components';
import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';
import Reload from '../Reload/Reload';

const Body = ({ data, onReload }) => {
    const isValidReloadFunction = isValidFunction(onReload);
    const { dataSet, mean, median, mode, setDataSet, stdDev } = useStatistics(data);
    return (
        <BodyContainer data-testid="body-container">
            <Dashboard data-testid="dashboard" mean={mean} median={median} stdDev={stdDev} mode={mode} />
            <Form data-testid="form" dataSet={dataSet} setDataSet={setDataSet} />
            {isValidReloadFunction && <Reload data-testid="data-reload" onClick={onReload} />}
        </BodyContainer>
    )
}

export default Body;

export const BodyContainer = styled.div`
  min-height: calc(100vh - 250px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  background-color: var(--lightcolor);
`;
