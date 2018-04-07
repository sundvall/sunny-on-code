/* eslint-disable import/extensions*/
import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
/* eslint-enable import/extensions*/
// import AllTags from './all-tags.js';

const Template = ({ data, pathContext }) => {
	const { markdownRemark: post } = data;
	const { frontmatter, html } = post;
	const { title, date /* tags */ } = frontmatter;
	const { next, prev } = pathContext;

	// {tags && <AllTags tags={tags} />}
	return (
		<div>
			<Helmet title={`${frontmatter.title} - My Blog`} />
			<div>
				<h1>{title}</h1>
				<h3>{date}</h3>

				<div dangerouslySetInnerHTML={{ __html: html }} />

				<p>
					{prev && (
						<Link to={prev.frontmatter.path}>
							Previous: {prev.frontmatter.title}
						</Link>
					)}
				</p>
				<p>
					{next && (
						<Link to={next.frontmatter.path}>
							Next: {next.frontmatter.title}
						</Link>
					)}
				</p>
			</div>
		</div>
	);
};

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				path
				tags
				excerpt
			}
		}
	}
`;

export default Template;
