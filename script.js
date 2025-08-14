function firstWord(s) {
  // your code here
	let str = s.trim();

	let space = str.indexof(" ");
	if(space===-1){
		return s;
	}
	return str.substring(0, space);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
