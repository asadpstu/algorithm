
var key = 2;
var sequence = "abcdefghijklmnopqrstuvwxyz";
var converArray = sequence.split('');
var newCipher = "";
var string = "xyz";
var givenStringArray = string.split('');
for (var i = 0; i < givenStringArray.length; i++) {
	var explodeChar = givenStringArray[i];
	//now find which actual index it has
	var getIndex = Number(sequence.indexOf(explodeChar)) + Number(key);
	if (getIndex > 25) {
		getIndex = (getIndex % 26);
	}
	else {
		getIndex = getIndex;
	}
	var newCipherChar = converArray[getIndex];
	newCipher = newCipher + "" + newCipherChar;

}
console.log(newCipher);	
