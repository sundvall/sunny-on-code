/* eslint-disable import/extensions*/
import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
/* eslint-enable import/extensions*/

/* FontAwesome requires the font to be imported
Note: This component does not include any of the Font Awesome CSS
 or fonts, so you'll need to make sure to include those on your
 end somehow, either by adding them to your build process or
 linking to CDN versions.*/
const Icon = ({ name, href }) => (
	<a href={href}>
		<FontAwesome name={name} />
	</a>
);

const Base = styled.div`
  margin: 20px 0;
  text-align: center;
  & a {
    display: inline-block;
    margin 5px;
    color: #fff;
  }
  & a span {
    transition: color .2s ease-in;
  }
  & a:hover {
    text-decoration: none;
  }
  & a:hover span.fa-linkedin {
    color: #4875b4;
  }
  & a:hover span.fa-twitter {
    color: #3cf;
  }
  & a:hover span.fa-github-alt {
    color: #fc6d26;
  }
`;

const SocMedia = props => {
	const icons = props.icons.map(icon => {
		return <Icon key={icon.name} name={icon.name} href={icon.href} />;
	});
	return <Base {...props}>{icons}</Base>;
};

export default SocMedia;
