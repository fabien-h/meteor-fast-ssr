Posts = new Mongo.Collection( 'posts' );

if ( Meteor.isServer && !Posts.findOne() )
	new Array( 10 ).fill( null ).forEach(
		( value, index ) => Posts.insert( {
			title: `Post title ${ index }`,
			text: 'Sentence for the post'.repeat( Math.random() * 15 + 5 ),
		} )
	);