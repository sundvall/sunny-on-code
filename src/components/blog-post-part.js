/* eslint-disable import/extensions*/
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import TimeAgo from 'react-timeago';
// import { Flex, Box } from 'grid-styled';
/* eslint-enable import/extensions*/
// import Breadcrumb from '../components/breadcrumb.js';
// import PageHead from '../components/page-head.js';
import Bar from '../components/bar.js';
// import {
// 	/* LIGHT, MIDLIGHT, MID,*/ MIDDARK /* ,DARK */
// } from './colors.js';

// const Header = styled.div`
// 	height: fit-contents;
// 	padding: 0;
// 	background: ${MIDDARK.hex};
// 	position: relative;
// 	overflow: hidden;
//
// 	& > div {
// 		padding-top: 120px;
// 		margin: auto;
// 		max-width: 600px;
// 	}
// `;

const Tags = styled.ol`
	float: right;
	list-style: none;
	margin: 0;
	& li a,
	& li {
		font-weight: 600;
		text-transform: uppercase;
		text-decoration: none;
		display: inline-block;
		color: #222;
	}
	& > li + li:before {
		padding: 0 8px;
		font-weight: 400;
		color: #444;
		content: '|';
	}
`;

const Content = styled.div`
	margin: 0 auto;
	max-width: 960px;
	padding: 0px 1.0875rem 1.45rem;
	padding-top: 5vh;
	hr {
		margin: 0 0 40px;
	}
`;

// const Title = styled.h1`
// 	margin-top: 0;
// 	text-transform: capitalize;
// 	color: #fff;
// `;

const Timestamp = styled.i`
	float: left;
`;

const TimeToRead = styled.h5`
	text-transform: uppercase;
	margin-top: 0.5em;
	margin-right: 0.5em;
	display: inline-block;
	float: left;
`;
/*
The active console is here the browser. The parameters
sent to this function is found in gatsby-node.js.
 */
const BlogPostPart = ({
	title,
	slug,
	date,
	excerpt,
	tags,
	timeToRead,
	tagLinkPrefix = 'tags'
}) => {
	const togos =
		tags &&
		tags.map(tag => {
			return (
				<li key={tag}>
					<Link to={`/${tagLinkPrefix}/${tag}`}>{tag}</Link>
				</li>
			);
		});
	/* eslint-disable react/no-danger*/
	return (
		<Content>
			<TimeToRead>{timeToRead} min read</TimeToRead>
			<Timestamp>
				Posted: <TimeAgo date={date} />
			</Timestamp>
			<Tags>{togos}</Tags>
			<Bar />
			<Link to={slug}>
				<h2>{title}</h2>
				<p>{excerpt}</p>
			</Link>
		</Content>
	);
};
/* eslint-enable react/no-danger*/
export default BlogPostPart;
