/* algorithm on nodejs */
var log = require('./log');
var List = require('./List');
var Stack = require('./Stack');
var Queue = require('./Queue');
var LList = require('./LList');
var DLList = require('./DLList');
var Dic = require('./Dic');
var HashTable = require('./HashTable');

function head(v){ log.h(v); }
function print(v,m){ log.print('  ', v.toString(), m ? '<<---'+m : ''); }

head(['-----------------------',
			' algorithmJS in nodejs ',
			'  kangki | 2014.09.18  ',
			'-----------------------']);

head(['진법변환함수']);
function mulBase(n, b){
	if(n==0) return 0;

	var s = new Stack();
	while(n > 0){
		s.push(n % b);
		n = Math.floor(n / b);
	}

	var r='';
	while(s.size()){
		r += s.pop();
	}

	return r;
}
print(
	mulBase(8, 2), 
	'mulBase(8, 2)'
);

head(['회문확인함수']);
function roundLetter(w){
	var s = new Stack();
	for(var i=0,n=w.length; i<n; i++){
		s.push(w[i]);
	}

	var r = '';
	while(s.size()){
		r += s.pop();
	}

	return w === r;
}
print(
	roundLetter('ababa'),
	'roundLetter("ababa")'
);

head(['수열함수:재귀']);
function factorial(n){
	return n==1 ? 1 : (n * factorial(n-1));
}
print(
	factorial(5),
	'factorial(5)'
);

head(['수열함수:스택']);
function factorial2(n){
	var s = new Stack();
	while(n>0){
		s.push(n--);
	}
	while(s.size()>0){
		n *= s.pop();
	}
	return n;
}
print(
	factorial2(5), 
	'factorial2(5)'
);

head(['100 미만의 숫자 기수정렬함수']);
function radixSort(data){
	function collect(src, dst){
		var p=0, i=0, n=src.length, q;
		while(i<n){
			q = src[i++];
			while(!q.empty()){
				dst[p++] = q.dequeue();
			}
		}
	}

	function distribute(src, dst, digit){
		var i=0, n=src.length, v, p, q;
		for(; i<n; i++){
			v = src[i];
			if(digit == 1){
				p = v%10;
			} else {
				p = Math.floor(v/10);
			}
			q = dst[p];
			q.enqueue(v);
		}
	}

	var qlist = [], i=0;
	while(i<10){
		qlist[i++] = new Queue();
	}

	distribute(data, qlist, 1);
	collect(qlist, data);
	distribute(data, qlist, 10);
	collect(qlist, data);

	return data;
}
print(
	radixSort([22,41,33,11,12,45,89,19]),
	'radixSort([22,41,33,11,12,45,89,19])'
);

;(function(){
	head(['-- Demo HashTable(S) --']);

	var datas = ['kim', 'lee', 'kang', 'park', 'hong', 'abc', 'cba'];
	var ht = new HashTable();
	print(ht, 'create HashTable');

	for(var i=0,l=datas.length; i<l; i++){
		ht.put(datas[i]);
		print(ht, 'put('+datas[i]+')');
	}

	ht.clear();
	print(ht, 'clear()');

	ht.toggleHash();
	for(var i=0,l=datas.length; i<l; i++){
		ht.put(datas[i]);
		print(ht, 'put('+datas[i]+')');
	}

	head(['-- Demo HashTable(E) --']);
})();

;(function(){
	head(['-- Demo Dictionary(S) --']);

	var dic = new Dic();
	print(dic, 'create Dic');

	dic.put('a','va');
	print(dic, 'put("a","va")');

	dic.put('b','vb');
	print(dic, 'put("b","vb")');

	dic.put('c','vc');
	print(dic, 'put("c","vc")');

	var c = dic.count();
	print(dic, 'count()='+c);

	dic.remove('c');
	print(dic, 'remove("c")');

	var v = dic.get('b');
	print(dic, 'get("b")='+v);

	head(['-- Demo Dictionary(E) --']);
})//();

;(function(){
	head(['-- Demo DLList(S) --']);

	var dll = new DLList();
	print(dll, 'create DLList');

	dll.insert('kim', dll.HEAD);
	print(dll,'insert("kim", ll.HEAD)');

	dll.insert('kang', 'kim');
	print(dll,'insert("kang","kim")');

	dll.insert('hong', 'kang');
	print(dll,'insert("hong","kang")');

	dll.insert('ki', 'kang');
	print(dll,'insert("ki","kang")');

	dll.remove('ki');
	print(dll,'remove("ki")');


	head(['-- Demo DLList(E) --']);
})//();

;(function(){
	head(['-- Demo LList(S) --']);

	var ll = new LList();
	print(ll,'create LList');

	ll.insert('kim', ll.HEAD);
	print(ll,'insert("kim", ll.HEAD)');

	ll.insert('kang', 'kim');
	print(ll,'insert("kang","kim")');

	ll.insert('hong', 'kang');
	print(ll,'insert("hong","kang")');

	ll.insert('ki', 'kang');
	print(ll,'insert("ki","kang")');

	ll.remove('ki');
	print(ll,'remove("ki")');

	head(['-- Demo LList(E) --']);
})//();

;(function(){
	head(['-- Demo Queue(S) --']);

	var q = new Queue();
	print(q, 'create queue');

	q.enqueue(1);
	print(q, 'enqueue(1)');

	q.enqueue(2);
	print(q, 'enqueue(2)');

	var v = q.dequeue(); 
	print(q, 'dequeue()='+v);

	head(['-- Demo Queue(E) --']);
})//();

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

;(function(){
	head(['-- Demo List(S) --']);

	var l = new List();	
	print(l, 'create list');

	l.add(1);
	print(l, 'add(1)');

	l.insert(0,2);
	print(l, 'insert(0,2)');

	l.insert(0,4);
	print(l, 'insert(0,4)');

	l.remove(0);
	print(l, 'remove(0)');

	print(l.indexOf(1), 'indexOf(1)');
	print(l.contains(1), 'contains(1)');

	for(var i=0,n=l.size();i<n;i++) {
		var v = l.get(i);
		l.set(i, v+5);
		print(v+'->'+l.get(i), 'get('+i+'), set('+i+','+l.get(i)+')');
	} 

	print(l.indexOf(1), 'indexOf(1)');
	print(l.contains(1), 'contains(1)');

	print(l.size(), 'size()');
	print(l.empty(), 'empty()');

	l.clear();
	print(l, 'clear()');
	print(l.size(), 'size()');
	print(l.empty(), 'empty()');

	head(['-- Demo List(E) --']);
})//();

