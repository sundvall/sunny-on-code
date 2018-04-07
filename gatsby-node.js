/* eslint-disable import/no-commonjs*/
const path = require('path');

const createTagPages = (createPage, posts) => {
	const tagPageTemplate = path.resolve(`src/templates/tags.js`);
	const allTagsTemplate = path.resolve(`src/templates/all-tags.js`);

	/*
  sortering av noder utifrån 'tag'
  posts : result.data.allMarkdownRemark.edges
kollar om det finns en property 'tags' för 'post'
och itererar i så fall genom denna, och lägger till
själva 'noden' i tag-objektet 'postsByTags'.
En 'post' hittas alltså på flera ställen i tag-objektet.
postsByTags = {foo:[node1,node2,node4],
bar: [node2,node4]}
  */
	const postsByTags = {};
	posts.forEach(({ node }) => {
		if (node.frontmatter.tags) {
			node.frontmatter.tags.forEach(tag => {
				if (!postsByTags[tag]) {
					postsByTags[tag] = [];
				}

				postsByTags[tag].push(node);
			});
		}
	});

	/* Här är en lista med alla 'taggar' som finns
  sparade i tag-objektet...*/
	const tags = Object.keys(postsByTags);
	/* ...som skickas till sidan som hittas
 på urlen '/tags'. Varje template kan använda
 innehållet i 'context' via o.pathContext.tags.
En länkning görs sen utifrån tag-namnet, där
urlen sätts i template'n.
  */
	createPage({
		path: `/tags`,
		component: allTagsTemplate,
		context: {
			tags: tags.sort()
		}
	});

	/* För att det skall finnas innehåll på varje
länk till 'taggen' ovan, så byggs här sidor.
*/
	tags.forEach(tagName => {
		/*
     varje lista med noder för en tag skickas till template
     tillsammans med tag-namnet. Template'n använder
     lite av postens innehåll och länkar till posten, vilket
     alltså förutsätter att den är byggd, vilket sker nedan
     i createPage(...node.frontmatter.path...).
      */
		const posts = postsByTags[tagName];

		createPage({
			path: `/tags/${tagName}`,
			component: tagPageTemplate,
			context: {
				posts,
				tagName
			}
		});
	});
};

exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;
	const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

	return graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						html
						id
						frontmatter {
							date
							path
							title
							excerpt
							tags
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors);
		}

		const posts = result.data.allMarkdownRemark.edges;

		createTagPages(createPage, posts);

		/* Här byggs varje post på en egen url. En länk till angränsande
      poster skickas genom att kolla utifrån det index som posten har
      i listan. Om alltså post-listan är sorterad på olika sätt, så
      blir länkarna olika.
      'path' och 'title' används, och förutsätter att template vet
      hur objekten ser ut (typ 'o.pathContext.next.frontmatter.title')
      vilket syns tydligare i denna fil där graphGQL-query har all info.
      Varför inte skicka 'title' och 'path' istället?*/
		posts.forEach(({ node }, index) => {
			createPage({
				path: node.frontmatter.path,
				component: blogPostTemplate,
				context: {
					prev: index === 0 ? null : posts[index - 1].node,
					next:
						index === posts.length - 1
							? null
							: posts[index + 1].node
				}
			});
		});
	});
};
