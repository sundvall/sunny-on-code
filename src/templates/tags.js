/* eslint-disable import/extensions*/
import React from 'react';
import Link from 'gatsby-link';
import TimeAgo from 'react-timeago';
/* eslint-enable import/extensions*/
import PageHead from '../components/page-head.js';
/* gatsby-node.js creates the parameters to this template.
The argument object consists of common properties sent
to all templates, but unique for this template is the
'pathContext' that mirrors the 'context' object in the
calling function:
context: {
	posts : array of nodes
	tagName : string
}
pathContext:{
	posts: [node1, node2, ..., nodeN],
	tagName: string
}
where a node is built with additional fields and
content in markdown-file (about fields- see 'gatsby-node.js:onCreateNode')
node: {
	fields:{
		slug:[string extracted from its filename]
	},
	frontmatter:{
		tags: [string, string, string]
	}
}
--
Also information about the url/path to this page is
available from the argument object: "location.pathname"
--
*/
const Tags = p => {
	const { pathContext } = p;
	// console.log('tags.js - creating pages for each tag');
	// console.log('tags:', p);
	const { posts, tagName } = pathContext;

	if (!posts) {
		throw new Error('tags: no posts: 54');
	}

	return (
		<div>
			<PageHead
				title={tagName}
				crumbs={[
					{ name: 'home', link: '/' },
					{ name: 'tags', link: '/tags' },
					{ name: tagName, link: tagName }
				]}
			/>
			<span>Posts about {tagName}:</span>

			<ul>
				{posts.map(
					({ fields, frontmatter: { excerpt, date, title } }) => {
						const { slug } = fields;
						return (
							<li key={slug}>
								<Link to={slug}>
									<h2>{title}</h2>
									<p>{excerpt}</p>
									<p>
										Posted:
										<TimeAgo date={date} />
									</p>
								</Link>
							</li>
						);
					}
				)}
			</ul>
		</div>
	);
};
export default Tags;
