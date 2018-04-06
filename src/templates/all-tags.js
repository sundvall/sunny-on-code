import React from 'react'
import Link from 'gatsby-link'

/* Denna komponent läser en array med 'tags'
['tag1', 'tag2', 'tag3' ... ]
och länkar till dessa. Det förutsätter att gatsby-node.js
har byggt sidor för länkarna.
*/
const AllTags = ({ pathContext }) => {
  const { tags } = pathContext

  if (tags) {
    return (
      <div>
        <ul>
          {tags.map(tag => {
            return (
              <li>
                <Link to={`/tags/${tag}`}>
                  {tag}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default AllTags
