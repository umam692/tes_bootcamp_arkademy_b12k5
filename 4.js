
function thirdHighest(arra){
	var n = arra.length;
	if (n < 3) { 
        console.log("Minimal array length is 3!"); 
        return; 
    } else if (!Array.isArray(arra)) {
    	console.log("Parameter should be an array!");
    } else if (n > 3) {
    	var highest = 3;
    	function nthlargest(arra, highest){
			var x = 0,
				y = 0,
				z = 0,
				temp = 0,
				tnum = arra.length, 
				flag = false, 
				result = false; 
   
			while(x < tnum){
				y = x + 1; 
				
				if(y < tnum){
					for(z = y; z < tnum; z++){		
						if(arra[x] < arra[z]){
							temp = arra[z];
							arra[z] = arra[x];
							arra[x] = temp;
							flag = true; 
						}else{
							continue;
						}	
					}					
				}
				
				if(flag){
					flag = false;
				}else{
					x++; 
					if(x === highest){          
						result = true;
					}	
				}
				if(result){
					break;
				}
			}
			return (arra[(highest - 1)]);	
		}
		console.log(nthlargest(arra,highest));
    }
    else {
    	console.log(0);
	}
}

//var arra = [107,1,-4,'a','true',0, -77]; 
thirdHighest([1,2,3,4,5,6]);

thirdHighest("bukan array nih");

thirdHighest([1,2]);

thirdHighest([107,1,-4,'a','true',0, -77]);
