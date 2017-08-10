import React from 'react';

export default ( {
	title,
	text,
} ) => <main>

	<a
		href={ FlowRouter.path( 'Home' ) }
	>
		home page
	</a>

	<h1>
		{ title }
	</h1>

	<p>
		{ text }
	</p>

</main>;