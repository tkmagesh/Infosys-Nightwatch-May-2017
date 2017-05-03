var result = 0;

function add(n){
	result += n;
}

function subtract(n){
	result -= n;
}
function getResult(){
	return result;
}

module.exports = {
	add : add,
	subtract : subtract,
	getResult : getResult
};

