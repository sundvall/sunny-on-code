/* eslint-disable import/extensions*/
import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import TimeAgo from 'react-timeago';
/* eslint-enable import/extensions*/
import PageHead from '../components/page-head.js';
import Bar from '../components/bar.js';

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
	const { data, location, pageContext } = p;
	const post = data.markdownRemark;
	const { tagLinkPrefix, next, previous } = pageContext;
	const crumbs = [
		{ name: 'home', link: '/' },
		{ name: post.frontmatter.title, link: location.pathname }
	];
	const hasTags = post && post.frontmatter && post.frontmatter.tags;
	const tags =
		hasTags &&
		post.frontmatter.tags.map(tag => {
			return (
				<li key={tag}>
					<Link to={`/${tagLinkPrefix}/${tag}`}>{tag}</Link>
				</li>
			);
		});
	/* eslint-disable react/no-danger*/
	return (
		<div>
			<PageHead
				title={post.frontmatter.title}
				crumbs={crumbs}
				previous={previous}
				next={next}
			/>
			<Content>
				<TimeToRead>{post.timeToRead} min read</TimeToRead>
				<Timestamp>
					Posted: <TimeAgo date={post.frontmatter.date} />
				</Timestamp>
				<Tags>{tags}</Tags>
				<Bar />
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</Content>
			{previous && <Link to={previous}>previous</Link>}
			{next && <Link to={next}>next</Link>}
		</div>
	);
};
/* eslint-enable react/no-danger*/

export const query = graphql`
	query($slug: String!) {
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
