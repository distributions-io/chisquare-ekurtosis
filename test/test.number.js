/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Validate a value is NaN:
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	ekurtosis = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number ekurtosis', function tests() {

	it( 'should export a function', function test() {
		expect( ekurtosis ).to.be.a( 'function' );
	});

	it( 'should compute the distribution ekurtosis', function test() {
		assert.closeTo( ekurtosis( 2 ), 6, 1e-5 );
		assert.closeTo( ekurtosis( 4  ), 3, 1e-5 );
		assert.closeTo( ekurtosis( 8  ), 1.5, 1e-5 );
		assert.closeTo( ekurtosis( 16  ), 0.75, 1e-5 );
	});

	it( 'should return `NaN` for invalid values of parameter k', function test() {
		assert.isTrue( isnan( ekurtosis( -1 ) ) );
	});

});
