import ReactDOM from 'react-dom/server';
import React from 'react';
import PostView from './post_view.js';
import getPostData from '/imports/api/getPostData.js';

FlowRouter.route( '/post/:postID', {
	name: 'Post',
} );

export default url => ReactDOM.renderToString(
	<PostView
		{ ...getPostData( url.split( '/' )[ 2 ] ) }
	/>
);