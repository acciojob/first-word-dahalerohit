function firstWord(s) {
  // your code here
	let s = s.trim();

	 space = s.indexof(" ");
	if(space===-1){
		return s;
	}
	return s.substring(0, space);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
