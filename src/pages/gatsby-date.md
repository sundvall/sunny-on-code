---
date: "2018-08-15T18:00+02:00"
title: "Date to relative time in Gatsby"
tags: ['time', 'graphql', 'gatsby', 'tools', 'howto']
excerpt: "The time is extracted as a string UTC-timestamp, and converted into elapsed time. Here is how."
---
#Date to relative time
Ok, I wrote this at "2018-08-15T18:00+02:00". This shall be displayed like '2 hours ago', or '1 year ago' or similar.
## time-ago
An energic developer (thank you) wrote this functionality for React, called "time-ago" https://github.com/nmn/react-timeago The component <TimeAgo date={date} /> takes the date and converts it.
## insufficient graphql request in Gatsby
Important here is to post the date-prop in a raw format. The date in this example will have the structure of "August 15th, 2018".
```javascript
export const query = graphql`
	{
		allMarkdownRemark {
			edges {
				node {
					id
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
					}
				}
			}
		}
	}
`;
```
The excpected result was in this case '2 hours ago', but the actual result was '17 hours ago'. Why? The answer is that the <TimeAgo> component never gets the information, since the graphql-query has filtered away the numbers.
The '<TimeAgo>' component will calculate elapsed time compared to that day, and compares the current time to the beginning of that day, which is at midnight.  
https://www.gatsbyjs.org/docs/querying-with-graphql/
## corrected:
This query without arguments to 'date' will retrieve the correct info to forward to the <TimeAgo date={date} /> component:
```javascript
export const query = graphql`
	{
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						date
					}
				}
			}
		}
	}
`;
```
