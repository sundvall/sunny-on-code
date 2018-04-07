/* eslint-disable import/extensions*/
import React from 'react';
// import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';
/* eslint-enable import/extensions*/
import Footer from './footer.js';
import { LIGHT /* , MIDLIGHT, MID, MIDDARK, DARK */ } from './colors.js';
/*
https://www.styled-components.com/docs/api#injectglobal
injectGlobal argument TaggedTemplateLiteral
*/
/* eslint-disable no-unused-expressions*/

/*
font-awesome imports a font-type of icons. It is used to display
icons for the socmedia
*/
injectGlobal`
@import "//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
  html {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;
/* eslint-enable no-unused-expressions*/

const WrapAll = styled.div`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	width: 100vw;
	background: ${LIGHT.hex};
	img {
		margin-bottom: 0;
	}
	border: 3px solid red;
`;

const Content = styled.div`
	flex: 1;
`;
const TemplateWrapper = ({ location, children }) => {
	/*
	The 'WrapAll-tag is the '<div data-reactroot>' under <body><div id=gatsby>
	and the topmost element for the gatsby-site.'
	The Helmet-tag is removed and its content injected into
	the <head>.
	*/
	return (
		<WrapAll>
			<Helmet
				title="Martin Sundvall"
				meta={[
					{ name: 'description', content: 'portfolio' },
					{
						name: 'keywords',
						content: 'martin, sundvall, portfolio, javascript'
					},
					{
						name: 'viewport',
						content: 'width=device-width, initial-scale=1'
					}
				]}
			/>
			<Content>{children()}</Content>
			{location.pathname !== '/404' && <Footer />}
		</WrapAll>
	);
};

export default TemplateWrapper;
