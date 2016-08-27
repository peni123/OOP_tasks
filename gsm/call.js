function Call (caller, receiver, duration){
	var _caller = caller;
	var _receiver = receiver;
	var _duration = duration;
	
	this.setDuration = function(duration) {
		_duration = duration;
		if (duration > 0 && duration < 120) {
			_duration = duration;
		}
	}
	this.getDuration = function() {
		return _duration;
	}
	
	this.setCaller = function(caller) {
		_caller = caller;
		if (caller instanceof Gsm && caller !== receiver) {
			_caller = caller;
		} else {
			throw new Error("Invalid Caller");
		}
	}
	this.getCaller = function() {
		return _caller;
	}
	this.setReceiver = function(receiver) {
		_receiver = receiver;
		if (receiver instanceof Gsm && caller !== receiver) {
			_receiver = receiver;
		} else {
			throw new Error("Invalid Receiver");
		}
	}
	this.getReceiver = function() {
		return _receiver;
	}
}


Call.prototype.getCallCost = function(pricePerMinute) {
	var price = pricePerMinute;
	var callLength = this.getDuration();
	return price*callLength;
}
Call.prototype.getInfo = function() {
	return "Caller:  " + this.getCaller() + "\n"
	+ " Receiver: " + this.getReceiver()+ "\n"
	+ " Duration: " + this.getDuration();
}
