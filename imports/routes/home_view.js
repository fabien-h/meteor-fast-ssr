import React from 'react';

export default ( {
	postsList,
} ) => <main>

	<h1>
		This is my home page !
	</h1>

	{
		postsList.map(
			post => <a
				key={ post._id }
				href={ FlowRouter.path( 'Post', { postID: post._id } ) }
				style={ { display: 'block', } }
			>
				{ post.title }
			</a>
		)
	}

</main>;