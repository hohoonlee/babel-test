const [a, ,b] = [1,2,3];

setTimeout(()=>{
	console.log(`a:${a}`);
},1000);

const list = [];
for(var i = 0; i < 5; i++) {
	list.push(_ => {
		console.log(i);
	});
}
for(let i = 10; i < 15; i++) {
	list.push(() => {
		console.log(i);
	});
}

list.forEach(v=>v());