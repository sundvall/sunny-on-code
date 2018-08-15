/* eslint-disable import/extensions */
import styled, { css } from 'styled-components';
/* eslint-enable import/extensions*/
import { DARK } from './colors.js';

const TopBackgroundWrapper = styled.div`
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0;
  width: 100%;
  padding-top: 100%;
  background-color: ${DARK.hex};
  background-size: 600% 600%;

  button {
    position: absolute;
    bottom: 5%;
    left: 15%;
  }

  ${props =>
		props.img &&
		css`
			background-image: url(${props.img});
			background-repeat: no-repeat;
			background-size: cover;
			image-rendering: -webkit-optimize-contrast;
		`}

  ${props =>
		props.fillPage &&
		css`
			padding-top: 0;
			width: 100vw;
			height: 100vh;
		`}

  ${props =>
		props.overlay &&
		css`
			&:after {
				background: ${DARK.hex};
				content: '';
				width: 100%;
				height: auto;
				position: absolute;
				z-index: -1;
				top: 0;
				right: 0;
				left: 0;
				bottom: 0;
			}
		`}
`;

export default TopBackgroundWrapper;
