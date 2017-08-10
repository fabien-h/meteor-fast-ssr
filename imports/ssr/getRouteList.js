export default () => {

	let postsList = Posts.find( {}, {
		_id: 1
	} ).fetch();

	return [ {
		url: '/',
		renderer: 'Home',
	}, ...(
		postsList.map(
			post => ( {
				url: `/post/${ post._id }`,
				renderer: 'Post',
			} )
		)
	) ]

}