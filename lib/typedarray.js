'use strict';

// MODULES //

var EKURTOSIS = require( './number.js' );


// EKURTOSIS //

/**
* FUNCTION: ekurtosis( out, k )
*	Computes the distribution ekurtosis for parameters stored in a typed array.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} k - input array
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function ekurtosis( out, k ) {
	var len = k.length,
		i;
	for ( i = 0; i < len; i++ ) {
		out[ i ] = EKURTOSIS( k[ i ] );
	}
	return out;
} // end FUNCTION ekurtosis()


// EXPORTS //

module.exports = ekurtosis;
