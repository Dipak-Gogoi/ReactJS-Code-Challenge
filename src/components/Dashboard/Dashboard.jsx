import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tiles from '../Tiles/Tiles';

const Dashboard = ({ mean, median, stdDev, mode }) => {
    return (
        <DashboardContainer data-testid="tile-container">
            <Tiles value={mean} title="Mean" />
            <Tiles value={median} title="Median" />
            <Tiles value={stdDev} title="Std Deviation" />
            <Tiles value={mode} title="Mode" />
        </DashboardContainer>
    )
}

Dashboard.propTypes = {
    mean: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    median: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    stdDev: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    mode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Dashboard.defaultProps = {
    mean: '--',
    median: '--',
    stdDev: '--',
    mode: '--',
};

export default Dashboard;

export const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  min-height: 400px;
  min-width: 100vw;
  width: 100vw;
  align-items: center;
  justify-content: space-evenly;
  color: var(--lightcolor);
  background-color: var(--primarybg);
`;

