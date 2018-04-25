function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function cmp(a, b) {
	return a-b;
}

function organizingContainers(container) {
	var twoDArr = container;
	var len = twoDArr.length;

	var sumHorArr = [];
	var sumVerArr = [];

	for(var i=0; i<len; i++) {
		var hor = twoDArr[i];
		var sumHor = hor.reduce(function(a, b){
			return a+b;
		}); 	

		// Add
		sumHorArr.push(sumHor);

		// As i stays the same, j changes a lot
		// i is good for arr[][i], last index, vertical	
		var sumVer = 0;
		for(var j=0; j<len; j++) {
			var itemVer = twoDArr[j][i]; // i kind of constant
			sumVer += itemVer;	
		}

		// Add
		sumVerArr.push(sumVer);
	}

	sumHorArr.sort(cmp);
	sumVerArr.sort(cmp);

	var condi = arraysEqual(sumHorArr, sumVerArr);

	if(condi)
		return 'Possible';
	else
		return 'Impossible';
}


var container = [ [ 1, 1 ], [ 1, 1 ] ];
//var container = [ [ 0, 2 ], [ 1, 1 ] ];
var out = organizingContainers(container);
console.log(out);
