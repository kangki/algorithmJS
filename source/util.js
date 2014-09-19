/* UTIL */
module.exports = 
util = {
	ofn : Object.prototype,
	fnString : function (o){
		return this.ofn.toString.call(o);
	},
	isArray : function (o){
		return this.fnString(o) === '[object Array]';
	}
};
