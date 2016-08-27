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

Employee.prototype.work = function(task, someTime) {
	var taskHours = task.getWorkingHours();
	var availableHours = this.getHoursLeft();
	var workTimePutIntoTask = someTime;
	var hasStartedTheTask = true;
	
	if (taskHours >= availableHours && workTimePutIntoTask == availableHours ) {
		this.setHoursLeft (0);
		task.setWorkingHours(taskHours - workTimePutIntoTask);
		console.log("Workday finished");
		hasStartedTheTask = false;
	}
	if (taskHours < availableHours && workTimePutIntoTask > 0 &&
			workTimePutIntoTask < availableHours && taskHours > workTimePutIntoTask ) {
		this.setHoursLeft (availableHours-workTimePutIntoTask);
		task.setWorkingHours(taskHours - workTimePutIntoTask);
		hasStartedTheTask = false;
	}
	if (taskHours <= availableHours && workTimePutIntoTask > 0 &&
			workTimePutIntoTask <= availableHours && taskHours == workTimePutIntoTask ) {
		this.setHoursLeft (availableHours-workTimePutIntoTask);
		task.setWorkingHours(0);
		console.log("Job finished");
		hasStartedTheTask = false;
	}
	if (hasStartedTheTask == true) {
		return "yes"
	} else {
		return "no"
	}
}
Employee.prototype.showReport = function(task, hours) {
	return "Worker's name:  " + this.getName()
	+ "  Worker's task:  "	+ task.getName()
	+ "  Available working time:  " + this.getHoursLeft()
	+ "  Ttime required to do the job:  " + task.getWorkingHours()
	+ " Has started working on the task -  " + this.work(task, hours)
	+ "  Time left until finishes the job:  " + task.getWorkingHours();
}

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

var task1 = new Task ("write memo", 2);
var task2 = new Task ("department meeting", 3);
var worker = new Employee ("Pesho", task1, 8);
var worker2 = new Employee ("misho", task2, 7);
worker2.work(task2, 3);
console.log(worker2.showReport(task2));


/**
 * 
 */