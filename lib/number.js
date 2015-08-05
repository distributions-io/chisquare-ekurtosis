'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// EKURTOSIS //

/**
* FUNCTION ekurtosis( k )
*	Computes the distribution ekurtosis for a Chi-squared distribution with parameter k.
*
* @param {Number} k - degrees of freedom
* @returns {Number} distribution ekurtosis
*/
function ekurtosis( k ) {
	if ( !isPositive( k ) ) {
		return NaN;
	}
	return 12 / k;
} // end FUNCTION ekurtosis()


// EXPORTS

module.exports =  ekurtosis;
