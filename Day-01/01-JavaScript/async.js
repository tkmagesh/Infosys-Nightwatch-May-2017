var app = (function(){
	function addSync(x,y){
		console.log('	[@Service] processing ', x , ' and ', y);
		var result = x + y;
		console.log('	[@Service] returing result ');
		return result;
	}

	function addSyncClient(x,y){
		console.log('[@Client] triggering addSync');
		var result = addSync(x,y);
		console.log('[@Client] result = ', result);
	}

	return {
		addSyncClient : addSyncClient
	}
})();