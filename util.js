/* UTIL */
module.exports = {
	typename : function (o){
		return Object.prototype.toString.call(o);
	},

	isArray : function (o){
		return this.typename(o) === '[object Array]';
	}

};


// console.log(typename([]), isArray([]));