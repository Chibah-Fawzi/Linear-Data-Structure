// PROBLEM 2 : SUM SIMMILAR ELEMENTS FROM 2 ARRAYS

var set1 = [3, 1, 7, 9]
var set2 = [2, 4, 1, 9, 3]
var sum = 0

// FIRST SOLUTION :
// ** FIND SIMMILAR ELEMENTS BETWEEN THE ARRAYS **
var res1 = set1.filter(num => set2.includes(num))
var res2 = set2.filter(num => set1.includes(num))

// ** MERGE THE ARRAYS **
var res = [...res1, ...res2]

// ** SUM THE SIMMILAR ELEMENTS **
sum = res.reduce((a, b) => a + b)
console.log(sum)

// SECOND SOLUTION :


var h = new Object()
h[3, 1, 7, 9] = 1;
h[2, 4, 1, 9, 3] = 2;

for (var k in h) {
    if (h.hasOwnProperty(k)) {
        alert('key is: ' + k + ', value is: ' + h[k])
    }
}