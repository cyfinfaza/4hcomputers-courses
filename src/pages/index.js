import * as React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
	return (
		<div>
			<h1>Welcome to {data.site.siteMetadata.title}.</h1>
			<p>
				This is a placeholder index page. The index page of this site doesn't
				really matter that much.
			</p>
			<h2>Links to Courses</h2>
			<ul>
				{data.allCourseMetadata.nodes.map((course) => (
					<li key={course.key}>
						<a href={course.link}>
							<h3>{course.title} </h3>
						</a>
						<small>
							by <strong>{course.author}</strong>
						</small>
						<p>{course.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default IndexPage;

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allCourseMetadata {
			nodes {
				title
				description
				author
				link
				key
			}
		}
	}
`;
