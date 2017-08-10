import React from 'react';
import {
	mount
} from 'react-mounter';
import PostView from './post_view.js';
import Loader from '/imports/components/loader.js';

FlowRouter.route(
	'/post/:postID', {
		name: 'Post',
		action( param ) {

			mount( Loader );

			return Meteor.call(
				'getPostData',
				param.postID,
				( err, postData ) => mount(
					PostView, {
						...postData
					}
				)
			)

		}
	}
);