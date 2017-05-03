/*
create a calculator object with the following methods
	- add(x,y)
	- subtract(x,y)
	- multiply(x,y)
	- divide(x,y)

Invoke all the methods with x = 100 and y = 50 and print the results
*/

/*var calculator = {
	add : function(x,y){
		return x + y;
	},
	subtract : function(x,y){
		return x - y;
	},
	multiply : function(x,y){
		return x * y;
	},
	divide : function(x,y){
		return x / y;
	},
}

console.log('[@calculator.js] calculator -> ', calculator);
module.exports = calculator;
*/

function add(x,y){
	return x + y;
}

function subtract(x,y){
	return x - y;
}

function multiply(x,y){
	return x * y;
}

function divide(x,y){
	return x / y;
}

/*var calculator = {
	add : add,
	subtract : subtract,
	multiply : multiply,
	divide : divide
};
module.exports = calculator;
*/

module.exports = {
	add : add,
	subtract : subtract,
	multiply : multiply,
	divide : divide
};

/*
module.exports = {
	add : add,
	subtract : subtract,
};
*/


