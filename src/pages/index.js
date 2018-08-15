/* eslint-disable import/extensions */
import React from 'react';
import styled, { css } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { graphql } from 'gatsby';
/* eslint-enable import/extensions*/
import PageHead from '../components/page-head.js';
import NavBar from '../components/nav-bar.js';
import BlogPostPart from '../components/blog-post-part.js';
import TopBackgroundWrapper from '../components/top-background-wrapper.js';
import Socmedia from '../components/socmedia.js';
import sizeadapation from '../utils/sizeadaptation.js';
import {
	/* LIGHT, DARK, MIDLIGHT, */
	MID,
	MIDDARK
} from '../components/colors.js';
import Layout from '../components/layout.js';

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

const Contact = ({ background, navBarId }) => (
	<Section id={navBarId} background={background}>
		<Title>Contact</Title>
		<Flex alignItems="center" flexDirection="column">
			<Box px={2} width={[1, 1 / 2]}>
				<p>martin@martinsundvall.se</p>
				<p>+46 739 84 61 91</p>
				<a href="https://www.linkedin.com/in/martinsundvall">
					https://www.linkedin.com/in/martinsundvall
				</a>
				<Socmedia
					icons={[
						{
							name: 'linkedin',
							href: 'https://www.linkedin.com/in/martinsundvall'
						}
					]}
				/>
			</Box>
		</Flex>
	</Section>
);
const About = ({ background, navBarId }) => (
	<Section id={navBarId} background={background}>
		<Title>About me</Title>
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

const IndexPage = ({ data, location }) => {
	const { edges: posts } = data.allMarkdownRemark;
	const links = [
		{ title: 'posts', href: '#posts' },
		{ title: 'all-tags', href: '/tags' },
		{ title: 'about', href: '#about' },
		{ title: 'contact', href: '#contact' }
	];
	return (
		<Layout location={location}>
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
						const {
							frontmatter,
							timeToRead,
							fields: { slug }
						} = post;
						const { date, title, excerpt, tags } = frontmatter;
						return (
							<div key={post.id}>
								<BlogPostPart
									title={title}
									slug={slug}
									date={date}
									excerpt={excerpt}
									tags={tags}
									timeToRead={timeToRead}
								/>
							</div>
						);
					})}
					<About background={MIDDARK.hex} navBarId="about" />
					<Contact background={MID.hex} navBarId="contact" />
				</Content>
			</div>
		</Layout>
	);
};

export const query = graphql`
	{
		allMarkdownRemark {
			totalCount
			edges {
				node {
					id
					timeToRead
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						tags
						excerpt
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;

export default IndexPage;
