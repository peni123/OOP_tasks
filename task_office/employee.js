function Employee (name, task, hours) {
	var _name = name;
	var _currentTask = task;
	var _hoursLeft = hours;
	
	this.setName = function(newName) {
		if (name === "") {
			this._name = name;
		} else {
			throw new Error("Name cannot be empty")
		}
	}
	this.getName = function() {
		return _name;
	}
	this.setCurrentTask = function(Newtask) {
		if (task === typeof "object") {
			_currentTask = task;
		}
	}
	this.getCurrentTask = function() {
		return _currentTask;
	}

	this.setHoursLeft = function(time){
		if (!isNaN(time)) {
			_hoursLeft = time;	
		}
	}
	this.getHoursLeft = function() {
		return _hoursLeft;
	}
}

Employee.prototype.work = function(someTime) {
	var task = this.getCurrentTask();
	var taskHours = task.getWorkingHours();
	var availableHours = this.getHoursLeft();
	var workTimePutIntoTask = someTime;
	
	
	if (taskHours >= availableHours && workTimePutIntoTask == availableHours ) {
			this.setHoursLeft (0);
			task.setWorkingHours(taskHours - workTimePutIntoTask).call(this);
			console.log("Workday finished");
		
	}
	if (taskHours < availableHours && workTimePutIntoTask > 0 &&
			workTimePutIntoTask < availableHours && taskHours > workTimePutIntoTask ) {
			this.setHoursLeft (availableHours-workTimePutIntoTask);
			task.setWorkingHours(taskHours - workTimePutIntoTask);
		
	}
	if (taskHours <= availableHours && workTimePutIntoTask > 0 &&
			workTimePutIntoTask <= availableHours && taskHours == workTimePutIntoTask ) {
			this.setHoursLeft (availableHours-workTimePutIntoTask);
			task.setWorkingHours(0);
			console.log("Job finished");
	}
	
}
Employee.prototype.showReport = function(hours) {
	var task = this.getCurrentTask(task);
	return "Worker's name:  " + this.getName() + "\n"
	+ "  Worker's task:  "	+ task.getName()+ "\n"
	+ "  Available working time:  " + this.getHoursLeft()+ "\n"
	+ "  Ttime required to do the job:  " + task.getWorkingHours()+ "\n"
	+ "  Time left until finishes the job:  " + task.getWorkingHours();
}

