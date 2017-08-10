import React from 'react';
import {
	mount
} from 'react-mounter';
import HomeView from './home_view.js';
import Loader from '/imports/components/loader.js';

FlowRouter.route(
	'/', {
		name: 'Home',
		action() {

			mount( Loader );

			return Meteor.call(
				'getPostsList',
				( err, postsList ) => mount(
					HomeView, {
						postsList
					}
				)
			)

		}
	}
);