/* eslint-disable import/extensions*/
import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import TimeAgo from 'react-timeago';
import { Flex, Box } from 'grid-styled';
/* eslint-enable import/extensions*/
import Breadcrumb from '../components/breadcrumb.js';
import Bar from '../components/bar.js';
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

const Title = styled.h1`
	margin-top: 0;
	text-transform: capitalize;
	color: #fff;
`;

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
export default p => {
	// console.log('blog-post:p', p);
	const { data, location, pathContext } = p;
	const post = data.markdownRemark;
	const { tagLinkPrefix } = pathContext;
	const crumbs = [
		{ name: 'home', link: '/' },
		// { name: 'posts', link: '/#posts' },
		// { name: 'about', link: '/about' },
		// { name: 'tags', link: `/${tagLinkPrefix}` },
		{ name: post.frontmatter.title, link: location.pathname }
	];
	const tags = post.frontmatter.tags.map(tag => {
		return (
			<li key={tag}>
				<Link to={`/${tagLinkPrefix}/${tag}`}>{tag}</Link>
			</li>
		);
	});
	/* eslint-disable react/no-danger*/
	return (
		<div>
			<Header>
				<Flex wrap>
					<Box px={2} width={[1, 2 / 3, 1 / 3]}>
						<Title>{post.frontmatter.title}</Title>
					</Box>
					<Box px={2} width={[1, 2 / 3]}>
						<Breadcrumb crumbs={crumbs} />
					</Box>
					<Box px={2} width={[1]}>
						<Bar />
					</Box>
				</Flex>
			</Header>
			<Content>
				<TimeToRead>{post.timeToRead} min read</TimeToRead>
				<Timestamp>
					Posted: <TimeAgo date={post.frontmatter.date} />
				</Timestamp>
				<Tags>{tags}</Tags>
				<Bar />
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</Content>
		</div>
	);
};
/* eslint-enable react/no-danger*/

// <Timestamp>
//     Posted: <TimeAgo date={post.frontmatter.date} />
// </Timestamp>
export const query = graphql`
	query BlogPostQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			timeToRead

			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				tags
				excerpt
			}
		}
	}
`;
