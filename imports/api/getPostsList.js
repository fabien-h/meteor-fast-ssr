export default () => Posts.find( {}, {
	_id: 1,
	title: 1,
} ).fetch();