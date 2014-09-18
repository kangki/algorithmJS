/* log */
module.exports = 
log = {
	h : function (arr){
		console.log(arr.join('\n'));
	},
	print : function(p,v,m){
		console.log(p || '', v, m || '');
	}
};