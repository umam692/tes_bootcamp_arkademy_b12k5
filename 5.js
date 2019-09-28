function countChar(string,char) {
 var re = new RegExp(char,"gi");

 if (string.match(re)) {
 	var hasil = string.match(re).length;
 	console.log(hasil);
 } else {
 	console.log('Not found!');
 }
 
}

// var str = 'I will practice survival skills';
// console.log(count(str,'i'));

countChar('arkademy','a');

countChar("javascript", "x");