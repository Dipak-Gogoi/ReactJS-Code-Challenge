import React from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';


const variants = {
    load: {
        scale: 2,
        transition: {
            type: 'spring',
        },
    },
    unload: {
        scale: 0.75,
    },
};

const Header = () => {
    return (
        <StyledHeader data-testid="header">
            <Logo
                src={logo}
                alt="logo"
                variants={variants}
                initial="unload"
                animate="load"
                exit="unload"
            />
            <Heading data-testid="heading">ReactJS Code Challenge</Heading>
            <Description data-testid="description">
                SPA app with simple dashboard that displays four tiles, each displaying a single statistic (Mean, Median, Std Deviation, Mode) for a dataset that is retrieved via a REST API call. The user should be able to request new data to be loaded and to see the statistics in the tiles update to reflect the new dataset.
                </Description>
        </StyledHeader>
    )
}

export default Header;


const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 20vh;
  font-size: calc(10px + 4vmin);
  background-color: var(--lightcolor);
  color: var(--darktext);
  padding-top: 25px;
  @media (min-width: 600px) {
    font-weight: bold;
    font-size: calc(10px + 2vmin);
  }
`;

const Logo = styled.div`
  height: 15vmin;
  pointer-events: none;
  @media (min-width: 600px) {
    height: 6vmin;
  }
`;

const Heading = styled.p`
  padding: 0;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 0.5em;
  width: 90vw;
  color: var(--lighttext);
  margin-bottom: 10px;
  @media (min-width: 600px) {
    margin-bottom: 0px;
    width: 60vw;
  }
`;
