'use strict';

var isIntegerArray = require( './../lib' );

console.log( isIntegerArray( [1,5,3] ) );
// returns true

console.log( isIntegerArray( [] ) );
// returns false

console.log( isIntegerArray( ['1','2','3'] ) );
// returns false
