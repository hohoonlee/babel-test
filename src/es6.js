function solution(n) {
	let answer = [];
	while(n > 0) {
		add(answer, 0);
		n -= 1;
	}
    return answer.reverse().join('');
}

function add(data, index) {
	data[index] = (data[index] || 0) + 1;
	if(data[index] === 3) data[index] = 4;
	if(data[index] === 5) {
		data[index] = 1;
		add(data, index+1);
	}
}

function k(n) {
	// if (n < 4) return -1;
	let p = 3;
	const answer = [];
	for(let i = 1; i < 100; i++) {
		let c = Math.pow(p, i);
		let a = (n-1) % c;
		if(a < c/3) {
			answer.push(1);
		}else if(a < c*2/3) {
			answer.push(2);
		}else {
			answer.push(4);
		}
	}
	return answer.reverse().join('');
}

// console.log(k(4));
for(let i = 1; i <= 5; i++) {
	console.log(i, '=>', solution(i), k(i));
}
