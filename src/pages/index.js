/* eslint-disable import/extensions */
import React from 'react';
import Link from 'gatsby-link';
/* eslint-enable import/extensions*/
import PageHead from '../components/page-head.js';

const IndexPage = ({ data }) => {
	const { edges: posts } = data.allMarkdownRemark;
	return (
		<div>
			<PageHead title="INDEX" crumbs={[{ name: 'home', link: '/' }]} />
			{posts.map(({ node: post }) => {
				const { frontmatter } = post;

				return (
					<div key={post.id}>
						<h2>
							<Link to={frontmatter.path}>
								{frontmatter.title}
							</Link>
						</h2>
						<p>{frontmatter.date}</p>
						<p>{frontmatter.excerpt}</p>
						<ul>
							{post.frontmatter.tags.map(tag => {
								return (
									<li key={tag}>
										<Link to={`/tags/${tag}`}>{tag}</Link>
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export const query = graphql`
	query IndexQuery {
		allMarkdownRemark {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
						tags
						excerpt
					}
				}
			}
		}
	}
`;

export default IndexPage;
