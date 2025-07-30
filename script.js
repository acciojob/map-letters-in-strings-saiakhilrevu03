//your JS code here. If required.
function mapLetters(str){
	let map = {};
	for(let i=0;i<str.length;i++){
		let char = str[i];
		if(!map[char]){
			map[char]=[];
		}
		map[char].push(i);
	}
	return map;
}
const str = prompt("enter a word");
alert(JSON.stringify(mapLetters(str)));