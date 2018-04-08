/* eslint-disable import/extensions*/
import React from 'react';
import styled from 'styled-components';
// import Link from 'gatsby-link';
// import TimeAgo from 'react-timeago';
import { Flex, Box } from 'grid-styled';
/* eslint-enable import/extensions*/
import Breadcrumb from '../components/breadcrumb.js';
// import Bar from '../components/bar.js';
import {
	/* LIGHT, MIDLIGHT, MID,*/ MIDDARK /* ,DARK */
} from '../layouts/colors.js';

const Header = styled.div`
	height: fit-contents;
	padding: 0;
	background: ${MIDDARK.hex};
	position: relative;
	overflow: hidden;

	& > div {
		padding-top: 120px;
		margin: auto;
		max-width: 600px;
	}
`;

// const Tags = styled.ol`
// 	float: right;
// 	list-style: none;
// 	margin: 0;
// 	& li a,
// 	& li {
// 		font-weight: 600;
// 		text-transform: uppercase;
// 		text-decoration: none;
// 		display: inline-block;
// 		color: #222;
// 	}
// 	& > li + li:before {
// 		padding: 0 8px;
// 		font-weight: 400;
// 		color: #444;
// 		content: '|';
// 	}
// `;

// const Content = styled.div`
// 	margin: 0 auto;
// 	max-width: 960px;
// 	padding: 0px 1.0875rem 1.45rem;
// 	padding-top: 5vh;
// 	hr {
// 		margin: 0 0 40px;
// 	}
// `;

const Title = styled.h1`
	margin-top: 0;
	text-transform: capitalize;
	color: #fff;
`;

// const Timestamp = styled.i`
// 	float: left;
// `;

// const TimeToRead = styled.h5`
// 	text-transform: uppercase;
// 	margin-top: 0.5em;
// 	margin-right: 0.5em;
// 	display: inline-block;
// 	float: left;
// `;
//

/*
crumbs = [
    { name: 'home', link: '/' },
    { name: 'other', link: '/#posts' },
    // { name: 'about', link: '/about' },
    // { name: 'tags', link: `/${tagLinkPrefix}` },
    { name: post.frontmatter.title, link: location.pathname }
];
*/
const PageHead = ({ title, crumbs, /* previous, next, */ navBarId }) => (
	<Header id={navBarId}>
		<Flex>
			<Box px={2} width={[1, 2 / 3, 1 / 3]}>
				<Title>{title}</Title>
			</Box>
			<Box px={2} width={[1, 2 / 3]}>
				<Breadcrumb crumbs={crumbs} />
			</Box>
		</Flex>
	</Header>
);
export default PageHead;
