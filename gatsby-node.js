/* eslint-disable import/no-commonjs*/
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
	const { createNodeField } = boundActionCreators;
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` });
		createNodeField({
			node,
			name: `slug`,
			value: slug
		});
	}
};
function sortNodesPerTag(createPage, posts) {
	const postsByTags = {};
	posts.forEach(({ node }) => {
		if (node.frontmatter.tags) {
			node.frontmatter.tags.forEach(tag => {
				if (tag.split(' ').length > 1) {
					throw new Error(
						`gatsby-node: tags with spaces are not allowed: check the tagname:"${tag}"`
					);
				}
				if (!postsByTags[tag]) {
					postsByTags[tag] = [];
				}

				postsByTags[tag].push(node);
			});
		}
	});
	return postsByTags;
}

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;
	return new Promise((resolve /* , reject */) => {
		graphql(`
			{
				allMarkdownRemark {
					edges {
						node {
							frontmatter {
								tags
							}
							fields {
								slug
							}
						}
					}
				}
			}
		`).then(result => {
			const posts = result.data.allMarkdownRemark.edges;
			const postsByTags = sortNodesPerTag(createPage, posts);
			const tags = Object.keys(postsByTags);
			const tagLinkPrefix = `tags`;
			/* create the view with all tags on url /tags */
			createPage({
				path: tagLinkPrefix,
				component: path.resolve(`src/templates/all-tags.js`),
				context: {
					tags: tags.sort()
				}
			});
			/*
			create a view for each of the tags with a list
			of all posts for that tag on the url
			 */
			tags.forEach(tagName => {
				/*
		     varje lista med noder för en tag skickas till template
		     tillsammans med tag-namnet. Template'n använder
		     lite av postens innehåll och länkar till posten, vilket
		     alltså förutsätter att den är byggd, vilket sker nedan
		     i createPage(...node.frontmatter.path...).
		      */
				const postsForTag = postsByTags[tagName];
				const templatesTags = path.resolve(`src/templates/tags.js`);
				createPage({
					path: `/${tagLinkPrefix}/${tagName}`,
					component: templatesTags,
					context: {
						posts: postsForTag,
						tagName
					}
				});
			});
			posts.map(({ node }, index) => {
				createPage({
					path: node.fields.slug,
					component: path.resolve(`./src/templates/blog-post.js`),
					context: {
						// Data passed to context is available in page queries as GraphQL variables.
						slug: node.fields.slug,
						alltags: tags,
						tagLinkPrefix,
						tags: node.frontmatter.tags,
						prev:
							index === 0
								? null
								: posts[index - 1].node.fields.slug,
						next:
							index === posts.length - 1
								? null
								: posts[index + 1].node.fields.slug
					}
				});
			});
			resolve();
		});
	});
};
