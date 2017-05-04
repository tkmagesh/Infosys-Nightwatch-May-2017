function accumulatorFactory(){
	
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

	return {
		add : add,
		subtract : subtract,
		getResult : getResult
	};
}
module.exports = accumulatorFactory;
