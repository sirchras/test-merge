const { hello } = require('./hello')

function greet(name) {
	console.log(hello(name))
}

greet('world')
greet('friend')
greet('there')
