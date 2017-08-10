export default ( postID ) => Posts.findOne( {
	_id: postID
} );