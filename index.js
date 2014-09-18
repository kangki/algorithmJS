/* algorithm on nodejs */
var log = require('./log');
var List = require('./List');

function head(v){ log.h(v); }
function print(v,m){
	log.print('  ', v.toString(), m ? '<<---'+m : '');
}

head([	'-----------------------',
		' algorithmJS in nodejs ',
		'  kangki | 2014.09.18  ',
		'-----------------------']);

(function(){
head(['-- Demo List(S) --']);

var list = new List();	print(list, 'create list');
list.add(1); 		print(list, 'add(1)');
list.insert(0,2);	print(list, 'insert(0,2)');
list.add(3);		print(list, 'add(3)');
list.insert(0,4);	print(list, 'insert(0,4)');
list.remove(0);		print(list, 'remove(0)');

print(list.indexOf(1), 	'indexOf(1)');
print(list.contains(1), 	'contains(1)');

for(var i=0,l=list.size();i<l;i++) {
	var v = list.get(i);
	list.set(i, v+5);
	print(v+'->'+list.get(i), 'get('+i+'), set('+i+','+list.get(i)+')');
} 

print(list.indexOf(1), 	'indexOf(1)');
print(list.contains(1), 	'contains(1)');

print(list.size(), 	'size()');
print(list.empty(), 	'empty()');

list.clear();		print(list, 'clear()');

print(list.size(), 	'size()');
print(list.empty(), 	'empty()');

head(['-- Demo List(E) --']);
})();
