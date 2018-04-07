/* eslint-disable import/extensions*/
import React from 'react';
import Link from 'gatsby-link';
/* eslint-enable import/extensions*/
/* gatsby-node.js bygger och skickar innehåll hit.
posts är en array med noder
posts = [node1,node2,node4]
tagName = 'foo'
Lite av innehållet i en 'post' visas (för närvarande
endast titeln) och en länk till posten sätts. Det
kräver att själva posten också är byggd, och finns
på urlen som angetts i toppen på .md-filen.
*/
const Tags = ({ pathContext }) => {
	const { posts, tagName } = pathContext;

	if (!posts) return null;
	return (
		<div>
			<span>Posts about {tagName}:</span>

			<ul>
				{posts.map(post => {
					return (
						<li key={post.id}>
							<Link to={post.frontmatter.path}>
								{post.frontmatter.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Tags;
