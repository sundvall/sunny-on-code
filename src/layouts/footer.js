/* eslint-disable import/extensions*/
import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import scrollToElement from 'scroll-to-element';
/* eslint-enable import/extensions*/
import Name from '../components/owner.js';
import Socmedia from '../components/socmedia.js';
import Button from '../components/button.js';
import { MIDLIGHT, MID } from './colors.js';

const Base = styled.div`
	height: fit-contents;
	padding: 0;
	background: ${MIDLIGHT.hex};
	border: 1px solid blue;
`;

const FooterText = styled.div`
	padding-top: 6px;
	color: LIGHT.hex;
	text-align: center;
	a {
		color: ${MID.hex};
	}
	border: 1px solid yellow;
`;

const SocmediaStyled = styled(Socmedia)`
	margin-left: -8px;
	text-align: left;
	border: 1px dashed green;
`;

const CenteredButtonBox = styled(Box)`
	margin: 2em auto;
	border: 1px dashed grey;
`;

const Footer = props => (
	<Base {...props}>
		<Flex flexWrap="wrap" justifyContent="space-around">
			<Box width={[1, 1 / 2, 1 / 3, 1 / 6]}>
				<Flex justifyContent="center" flexDirection="column">
				<CenteredButtonBox>
				<Button
					onClick={() => {
						scrollToElement('html');
					}}
					small="small"
					dark="dark"
					opaque="opaque"
				>
					Top
				</Button>
					<Name block />
				</CenteredButtonBox>

				<CenteredButtonBox>
					<SocmediaStyled
						icons={[
							{
								name: 'github-alt',
								href: 'https://github.com/sundvall/'
							},
							{
								name: 'linkedin',
								href:
									'https://www.linkedin.com/in/martinsundvall'
							}
						]}
					/>
					<Box>
						<FooterText>
							<h4>
								Built with{' '}
								<a href="https://www.gatsbyjs.org/">
									GatsbyJS
								</a>
							</h4>
						</FooterText>
					</Box>
				</CenteredButtonBox>
				</Flex>
			</Box>
			
		</Flex>
	</Base>
);

export default Footer;
