
function sortNumber($value) {
	let number = $value;
	let filter = number.replace(/\D/g, '');
	let sortir = filter.split('');

	if (filter) {
		var hasil = sortir.sort(function(a, b){return a-b});
		var x = hasil.toString();
		let filter1 = x.replace(/\,/g, '');
		console.log(filter1);	
	} else {
		console.log('No number found in parameter!');
	}

	
}

// urut('48172a94');
sortNumber("48172a94");
sortNumber("abc");
sortNumber("94a");


