/* eslint-disable import/extensions*/
import React from 'react';
import { Link } from 'gatsby';
/* eslint-enable import/extensions*/
import PageHead from '../components/page-head.js';

/* Denna komponent läser en array med 'tags'
['tag1', 'tag2', 'tag3' ... ]
och länkar till dessa. Det förutsätter att gatsby-node.js
har byggt sidor för länkarna.
*/
const AllTags = ({ pageContext }) => {
	const { tags } = pageContext;

	if (!tags) return null;
	return (
		<div>
			<PageHead
				title="all tags"
				crumbs={[
					{ name: 'home', link: '/' },
					{ name: 'tags', link: '/tags' }
				]}
			/>
			<ul>
				{tags.map(tag => {
					return (
						<li key={tag}>
							<Link to={`/tags/${tag}`}>{tag}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default AllTags;
