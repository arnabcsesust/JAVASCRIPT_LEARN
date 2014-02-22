/* Creating Object By Object Literals */
var empty = {};								// An Object With no Properties
var point = {X:0, Y:0};						// Two Properites
var point2 = {X: point.X, Y: point.Y};		// More Complex Values

var book = {
	"main title": "Javascript",
	'sub-title' : "The Definitive Guide",
	"for" : "all audiences",
	author : {
		firstname: "Hasib",
		surname: "Arnab"
	}
};