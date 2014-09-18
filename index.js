/* algorithm on nodejs */
var log = require('./log');
var List = require('./List');
var Stack = require('./Stack');

function head(v){ log.h(v); }
function print(v,m){
	log.print('  ', v.toString(), m ? '<<---'+m : '');
}

head([	'-----------------------',
		' algorithmJS in nodejs ',
		'  kangki | 2014.09.18  ',
		'-----------------------']);

head(['진법변환함수']);
function mulBase(n, b){
	if(n==0) return 0;

	var s = new Stack(), r = '';
	while(n > 0){
		s.push(n % b);
		n = Math.floor(n / b);
	}
	while(s.size()){
		r += s.pop();
	}
	return r;
}
var n = mulBase(8, 2);	print(n, 'mulBase(8, 2)');

head(['회문확인함수']);
function roundLetter(w){
	var s = new Stack(), r = '';
	for(var i=0,n=w.length; i<n; i++){
		s.push(w[i]);
	}
	while(s.size()){
		r += s.pop();
	}
	return w === r;
}
var b = roundLetter('ababa'); print(b, 'roundLetter("ababa")');

head(['수열함수']);
function factorial(n){
	if(n == 1) return 1;
	return n * factorial(n-1);
}
function factorial2(n){
	var s = new Stack(), r=1;
	while(n>0){
		s.push(n--);
	}
	while(s.size()>0){
		r *= s.pop();
	}
	return r;
}
var d = factorial(5); print(d, 'factorial(5)'),
	d = factorial2(5); print(d, 'factorial2(5)');

;(function(){
head(['-- Demo Stack(S) --']);

var s = new Stack();	print(s, 'create stack');
s.push(1);				print(s, 'push(1)');
s.push(2);				print(s, 'push(2)');
var v = s.pop(); 		print(s, '=pop()='+v);

head(['-- Demo Stack(E) --']);
})//();

;(function(){
head(['-- Demo List(S) --']);

var l = new List();	print(l, 'create list');
l.add(1); 			print(l, 'add(1)');
l.insert(0,2);		print(l, 'insert(0,2)');
l.insert(0,4);		print(l, 'insert(0,4)');
l.remove(0);		print(l, 'remove(0)');

print(l.indexOf(1), 	'indexOf(1)');
print(l.contains(1), 	'contains(1)');

for(var i=0,n=l.size();i<n;i++) {
	var v = l.get(i);
	l.set(i, v+5);
	print(v+'->'+l.get(i), 'get('+i+'), set('+i+','+l.get(i)+')');
} 

print(l.indexOf(1), 	'indexOf(1)');
print(l.contains(1), 	'contains(1)');

print(l.size(), 	'size()');
print(l.empty(), 	'empty()');

l.clear();			print(l, 'clear()');

print(l.size(), 	'size()');
print(l.empty(), 	'empty()');

head(['-- Demo List(E) --']);
})//();

