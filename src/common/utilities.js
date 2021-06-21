"use strict";

const getKeyValues = (inputObject) => {
	const values = [];

	Object.keys(inputObject).forEach(function(key) {
		values.push(inputObject[key]);
	});

	return values;
};

module.exports = {
	getKeyValues
};
