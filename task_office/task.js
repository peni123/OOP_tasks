function Task(name, hours) {
	var _name = name;
	var _workingHours = hours;
	
	this.setName = function(name) {
	
			_name = name;
		
	}
	this.getName = function() {
		return _name;
	}
	this.setWorkingHours = function(hours) {
		
			_workingHours = hours;
		
	}
	this.getWorkingHours = function() {
		return _workingHours;
	}
}

