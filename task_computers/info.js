/**
 * 
 */
function Person(name, age) {
	
	var name = name;
	var age = age;
	
	this.getName = function() {
		return name;
	};
	
	
	this.getAge = function() {
		return age;
	};
	
}

Person.prototype.getInfo = function() {
	return 'Hi I am ' + this.getName() + 
			' and I am ' + this.getAge() + ' old';
}



