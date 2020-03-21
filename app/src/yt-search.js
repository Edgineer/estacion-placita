const yts = require( 'yt-search' );
 
// promises also supported
//const r = await yts( 'superman theme' );
(async() => {await yts( 'zoe nada', ( err, r ) => {
    r.videos.forEach( ( v ) => {
      const views = String( v.views ).padStart( 10, ' ' )
      console.log( `${ views } | ${ v.title } (${ v.timestamp }) | ${ v.author.name }` )
    })
})})();