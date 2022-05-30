function hello(name) {
	return `hello ${name}`
}

function helloworld() {
	return hello('world')
}

module.exports = { hello, helloworld }
