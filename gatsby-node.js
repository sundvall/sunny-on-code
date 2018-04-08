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
				postsByTags[tag].push({ ...node });
			});
		}
	});
	return postsByTags;
}

/*
This is the fetch of data from 'posts/*.md'. All information
extracted here is passed to the first creation of pages.
The 'boundActionCreators' includes redux-actions used to control
the creation.
{ deletePage: [Function],
  createPage: [Function],
  deleteLayout: [Function],
  createLayout: [Function],
  deleteNode: [Function],
  deleteNodes: [Function],
  createNode: [Function],
  touchNode: [Function],
  createNodeField: [Function], - used above in 'onCreateNode'
  createParentChildLink: [Function],
  createPageDependency: [Function],
  deleteComponentsDependencies: [Function],
  replaceComponentQuery: [Function],
  createJob: [Function],
  setJob: [Function],
  endJob: [Function],
  setPluginStatus: [Function],
  createRedirect: [Function] }
  The result from the query has the structure described by itself:
  like "{ data: { allMarkdownRemark: { edges: [Array] } } } "
  Test the query and response in GraphiQL.
*/
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
								title
								date(formatString: "MMMM DD, YYYY")
								excerpt
							}
							fields {
								slug
							}
						}
						next {
							fields {
								slug
							}
						}
						previous {
							fields {
								slug
							}
						}
					}
					totalCount
				}
			}
		`).then(result => {
			const posts = result.data.allMarkdownRemark.edges;
			const postsByTags = sortNodesPerTag(
				createPage,
				result.data.allMarkdownRemark.edges
			);
			const tags = Object.keys(postsByTags);
			const tagLinkPrefix = `tags`;
			/* create the view with all tags on url "/tagLinkPrefix",
			and use the template specified */
			createPage({
				path: tagLinkPrefix,
				component: path.resolve(`src/templates/all-tags.js`),
				context: {
					tags: tags.sort()
				}
			});
			/*
			create a view for each of the tags with a list
			of all posts for that tag
			 */
			tags.forEach(tagName => {
				/*
				Each list of nodes for a tag is sent to the template
				togehter with the tagname. (The template uses parts
				of the post's content, including metainformation). A
				link is built from each tag, wich means that the page
				has to be created - which happens here in 'createPage'.
		      */
				const templatesTags = path.resolve(`src/templates/tags.js`);
				createPage({
					path: `/${tagLinkPrefix}/${tagName}`,
					component: templatesTags,
					context: {
						posts: postsByTags[tagName],
						tagName
					}
				});
			});
			/*
			Here each post is created on its own path.
			 */
			posts.map(({ node, next, previous }, index) => {
				const nextSlug = next && next.fields.slug;
				const previousSlug = previous && previous.fields.slug;
				createPage({
					path: node.fields.slug,
					component: path.resolve(`./src/templates/blog-post.js`),
					context: {
						// Data passed to context is available
						// in page queries as GraphQL variables.
						slug: node.fields.slug,
						// alltags: tags,
						tagLinkPrefix,
						tags: node.frontmatter.tags,
						previous: previousSlug,
						next: nextSlug
						// prev:
						// 	index === 0
						// 		? null
						// 		: posts[index - 1].node.fields.slug,
						// next:
						// 	index === posts.length - 1
						// 		? null
						// 		: posts[index + 1].node.fields.slug
					}
				});
			});
			resolve();
		});
	});
};
