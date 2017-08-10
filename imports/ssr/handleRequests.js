import Home from '/imports/routes/home_serverRoute.js';

import getRouteList from '/imports/ssr/getRouteList.js';
import renderRoute from '/imports/ssr/renderRoute.js';

let routes = {};
for ( let route of getRouteList() )
	routes[ route.url ] = renderRoute( route );

WebApp.connectHandlers.use(
	( req, res, next ) => {

		if ( !!routes[ req.originalUrl ] ) {

			let originalWrite = res.write;
			res.write = ( chunk, encoding ) => {
				chunk = chunk.toString()
					.replace( '<body>', `<body><div id='react-root'>${ routes[ req.originalUrl ] }</div>` );
				originalWrite.call( res, chunk, encoding );
				return res.end();
			}

		}

		return next();

	}
)