/* 가장긴 공통 문자열 알고리즘 */
function lcs(w1,w2){
	var max = 0;
	var index = 0;
	var lcsarr = [];
	for(var i=0; i < w1.length+1; i++){
		lcsarr[i] = [];
		for(var j=0; j < w2.length+1; j++){
			lcsarr[i][j] = 0;
		}
	}
	console.log(lcsarr);

	for(var i=0; i < w1.length+1; i++){
		for(var j=0; j < w2.length+1; j++){
			if(i==0||j==0){
				lcsarr[i][j] = 0;
			} else {
				if(w1[i-1] == w2[j-1]){
					lcsarr[i][j] = lcsarr[i-1][j-1] + 1;
				} else {
					lcsarr[i][j] = 0;
				}
			}
			if(max < lcsarr[i][j]){
				max = lcsarr[i][j];
				index = i;
			}
		}
	}

	console.log('');
	console.log(lcsarr);
	console.log('max',max, 'index',index, index-max);

	var str = '';
	if(max > 0){
		for(var i=0; i < max; i++){
			str += w1[index-max+i];
		}

	}

	console.log(str);
	return str;
}

lcs('abcaa','baca');


