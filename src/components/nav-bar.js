/* eslint-disable import/extensions */
import React from 'react';
import styled, { css } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import scrollToElement from 'scroll-to-element';
/* eslint-enable import/extensions*/

import Name from './owner.js';
import { LIGHT, DARK } from './colors.js';

import sizeadapation from '../utils/sizeadaptation.js';

const Base = styled.div`
  padding: 0;
  margin: 0;
  max-height: 62px;
  line-height: 62px;
  width: 100vw;
  & ul {
    width: 100%;
    height: 62px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
  }
  & ul > li a,
  & ul > li {
    height: 62px;
    font-size: 11px;
    float: right;
    position: relative;
    color: ${LIGHT.hex};
    text-decoration: none;
    cursor: pointer;
    transition: opacity .3s ease;
  }
  & ul > li a {
    font-family: 'Raleway';
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    margin-right: 32px;
  }

  ${props =>
		props.dark &&
		css`
			background: ${LIGHT.hex};
			& ul > li a,
			& ul > li {
				color: ${DARK.hex};
				opacity: 0.6;
			}
			& ul > li a:hover {
				opacity: 1;
			}
			a {
				color: ${DARK.hex};
			}
		`}

  ${props =>
		props.main &&
		css`
			background: transparent;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 100;
		`}

  ${sizeadapation.xs`
    & ul {
      display: none;
    }
  `}
`;
const NavBar = props => {
	const { links } = props;
	return (
		<Base {...props}>
			<Flex>
				<Box px={2} width={[1, 1 / 3, 2 / 6]}>
					<Name />
				</Box>
				<Box px={2} width={[0, 2 / 3, 4 / 6]}>
					<ul>
						{links &&
							links.map(link => (
								<li key={link.title}>
									<a
										href={link.href}
										onClick={() => {
											scrollToElement(link.href);
										}}
									>
										{link.title}
									</a>
								</li>
							))}
					</ul>
				</Box>
			</Flex>
		</Base>
	);
};

export default NavBar;
