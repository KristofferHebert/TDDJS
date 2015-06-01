// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
(function() {
	"use strict";

	var minuend = 0;

	exports.initialize = function(baseValue) {
		minuend = baseValue;
	};

	exports.difference = function(subtrahend) {
		var result = minuend - subtrahend;
		if (result < 0) result = 0;
		return result;
	};
}());
