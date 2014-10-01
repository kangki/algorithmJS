var log = require('./log');
var util = require('./util');
var Stack = require('./Stack');

;(function(){
	head(['-- Demo Stack(S) --']);

	var s = new Stack();
	print(s, 'create stack');

	s.push(1);
	print(s, 'push(1)');

	s.push(2);
	print(s, 'push(2)');

	var v = s.pop();
	print(s, 'pop()='+v);

	head(['-- Demo Stack(E) --']);
})//();
