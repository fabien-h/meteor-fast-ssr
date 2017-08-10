import ReactDOM from 'react-dom/server';
import React from 'react';
import HomeView from './home_view.js';
import getPostsList from '/imports/api/getPostsList.js';

FlowRouter.route( '/', {
	name: 'Home',
} );

export default () => ReactDOM.renderToString(
	<HomeView
		postsList={ getPostsList() }
	/>
);