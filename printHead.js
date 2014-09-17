/* print header */
var util = require('./util.js');
module.exports = {
	out : function (arr){
		if(util.isArray(arr)){
			console.log(arr.join('\n'));
		}
	}
}
	
// H(['111']);