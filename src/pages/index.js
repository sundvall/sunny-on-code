/* eslint-disable import/extensions */
import React from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';
import { Flex, Box } from 'grid-styled';
/* eslint-enable import/extensions*/
import PageHead from '../components/page-head.js';
import NavBar from '../components/nav-bar.js';
import TopBackgroundWrapper from '../components/top-background-wrapper.js';
import Socmedia from '../components/socmedia.js';
import sizeadapation from '../utils/sizeadaptation.js';
import { LIGHT, DARK, MIDLIGHT, MIDDARK, MID } from '../layouts/colors.js';

const SocmediaStyled = styled(Socmedia)`
	position: absolute;
	margin: 0 auto;
	left: 0;
	right: 0;
	bottom: 16px;
`;

const Content = styled.div`
	& > a {
		visibility: hidden;
		display: block;
		height: 0;
	}
	& > h1 {
		text-align: center;
	}
`;

const Title = styled.h1`
	font-family: 'Raleway';
	text-transform: uppercase;
	letter-spacing: 6px;
	margin-bottom: 40px;
	font-weight: 400;
	font-size: 32px;
	line-height: 40px;
	border: none;
	color: #292929;
	${props =>
		props.small &&
		css`
			font-size: 12px;
			letter-spacing: 2px;
			font-weight: 700;
			line-height: 24px;
		`};
`;

const Section = styled.div`
	text-align: center;
	padding-top: 45px;
	padding-bottom: 40px;
	a {
		font-family: 'Lato';
	}
	p {
		margin-bottom: 64px;
		color: #666;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Raleway';
		text-transform: uppercase;
		color: #292929;
	}
	h4 {
		letter-spacing: 3px;
		font-weight: 400;
		font-size: 24px;
		line-height: 32px;
		color: #292929;
	}
	span {
		color: #666;
		opacity: 0.5;
		display: block;
	}
	& > div:last-child {
		border-bottom: none !important;
	}
	${props =>
		props.center &&
		css`
			text-align: left;
			& > * {
				margin-left: 30vw;
			}
			h4 {
				margin-left: 20vw;
			}
			${sizeadapation.xs`
        & > div {
          margin-left: 3vw !important;
        }
    `};
		`} ${props =>
		props.background &&
		css`
			background: ${props.background};
			* {
				color: #eee;
			}
			span {
				text-align: left;
				font-size: 16px;
				line-height: 28px;
				font-weight: 400;
				opacity: 0.5;
			}
			span,
			p {
				color: #fefefe !important;
			}
			h6 {
				color: #fff;
				font-weight: 700;
			}
			h4 {
				color: #fff;
			}
			div {
				border-bottom: 1px solid #333 !important;
			}
		`};
`;

// const Item = styled.div`
// 	width: 40%;
// 	margin: 0 auto;
// 	border: none;
// 	border-bottom: 1px solid #eee;
// 	h6 {
// 		letter-spacing: 2px;
// 		font-weight: 700;
// 		padding-top: 6px;
// 	}
// 	span,
// 	p {
// 		font-size: 13px;
// 		line-height: 24px;
// 		color: #666;
// 	}
// 	span {
// 		opacity: 0.75;
// 		float: right;
// 		text-transform: uppercase;
// 	}
// 	p {
// 		margin-bottom: 24px;
// 		opacity: 0.5;
// 	}
// 	${sizeadapation.xs`
//     width: 90%;
//   `};
// `;

const About = ({background}) => (
	<Section background={background} id="about">
		<Title>About Me</Title>
		<Flex alignItems="center" flexDirection="column">
			<Box px={2} width={[1, 1 / 2]}>
				<p>
					I am a front end developer focused on javascript and
					functionality. I work at an igame company{' '}
					<a href="https://www.comeon.com/">comeon</a>. Previous
					experience includes banners for ads and self-service
					platforms.
				</p>
				<p>
					My background is partly artistic. (see
					<a href="http://martinsundvall.se/wordpress/">here</a>
					if you are curious)
				</p>
			</Box>
		</Flex>
	</Section>
);

const IndexPage = ({ data }) => {
	const { edges: posts } = data.allMarkdownRemark;
	const links = [
		{ title: 'posts', href: '#posts' },
		{ title: 'about', href: '#about' },
		{ title: 'contact', href: '#contact' }
	];
	return (
		<div>
			<NavBar main links={links} />
			<Content>
				<TopBackgroundWrapper overlay fillPage>
					<SocmediaStyled
						icons={[
							{
								name: 'github-alt',
								href: 'https://github.com/sundvall/'
							},
							{
								name: 'linkedin',
								href:
									'https://www.linkedin.com/in/martinsundvall'
							}
						]}
					/>
				</TopBackgroundWrapper>
				<PageHead
					navBarId="posts"
					title="INDEX OF POSTS"
					crumbs={[{ name: 'home', link: '/' }]}
				/>
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
											<Link to={`/tags/${tag}`}>
												{tag}
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
				<About background={MIDDARK.hex} id="about" />
			</Content>
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
