/* eslint-disable import/extensions*/
import React from 'react';
import styled /* ,{ css }*/ from 'styled-components';
/* eslint-enable import/extensions*/
import { MIDLIGHT, /* MIDDARK, DARK, */ LIGHT } from '../layouts/colors.js';

const Base = styled.a`
	color: ${MIDLIGHT.hex};
	margin: 20px 0;
	width: fit-content;
	white-space: nowrap;
	&:hover {
		cursor: pointer;
		-webkit-background-clip: text;
		text-decoration: none;
		color: ${LIGHT.hex};
	}
`;

const Owner = props => (
	<Base {...props} href="/">
		Martin Sundvall
	</Base>
);

export default Owner;
