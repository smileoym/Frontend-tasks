// Number
var m = 1.618;
var n = 4000;

// Object
var N = new Number(4000);

console.log(typeof n);
console.log(typeof N);
console.log("---------------");

var person = {name: "Artem",
				 age: 31,
				 photo: function() {
					 console.log("Very good Photo");
				 }
				 				 
			 }

var ArtemsName = person.name;
console.log(ArtemsName);
var ArtemsAge = person.age;
console.log(ArtemsAge);
person.photo();
console.log("------------");

var M = new Number(1.618);
var m = 1.2345;
console.log(m.toFixed(3));
console.log(2 .toFixed(2));
console.log("------------");
console.log("------------");

//console.log(n.toExponential(2));
//console.log(m.toPrecision(3));

var i = 10;
console.log(++i);
var j = i;
console.log(j);
console.log("------------");
console.log("------------");

console.log(9%2);

n = n + 2;
n +=2;
n *=3;

console.log(Math.sqrt(25));
console.log(Math.PI);

console.log(3.00e+400000);
console.log(4/0);
console.log(0/0);
console.log(NaN===NaN);

console.log(0.2 + 0.1);







