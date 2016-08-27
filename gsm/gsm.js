function Gsm (model) {
	
	var _model = model;
	var _hasSimCard = false;
	var _simMobileNumber = null;
	var _outgoingCallsDuration = 0;
	var _lastIncomingCall = null;
	var _lastOutgoingCall = null;
	
	
	this.getModel = function() {
		return _model;
	}
	this.getHasSimCard = function() {
		return _hasSimCard;
	}
	this.getSimMobileNumber = function() {
		return _simMobileNumber;
	}
	this.getOutgoingCallsDuration = function() {
		return _outgoingCallsDuration;
	}
	this.setOutgoingCallsDuration = function(_lastIncomingCall) {
		_outgoingCallsDuration += _lastIncomingCall;
	}
	this.getLastIncomingCall = function() {
		return _lastIncomingCall;
	}
	this.setLastIncomingCall = function(min) {
		_lastIncomingCall = min;
	}
	this.LastOutgoingCall = function(min) {
		_lastOutgoingCall = min;
	}
	this.getLastOutgoingCall = function() {
		return _lastOutgoingCall;
	}
}
Gsm.prototype.insertSimCard = function(simNumber) {
	this.setSimMobileNumber = function(simNumber) {
		
		if (typeof simNumber == "string" && str.charAt(0) =="0" && str.charAt(1) =="8") {
			var restOfSimNumber= simNumber.slice(0);
			restOfSimNumber = parseInt(restOfSimNumber);
			var devider = Math.pow(10, 8);
				if (((restOfSimNumber >= 800000000 && restOfSimNumber <8999999999) ||
					(restOfSimNumber > 800000000 && restOfSimNumber <= 8999999999)) && 
					(Math.floor(restOfSimNumber /devider ) == 8 )) {
					
					_simMobileNumber = simNumber;
					
					this.setHasSimCard = function() {
						_hasSimCard = true;
					}
				}
		} else {
			throw new Error("Invalid sim Number");
		}
	}
}
Gsm.prototype.removeSimCard = function() {
	this.setSimMobileNumber = function() {
		_simMobileNumber = null;
	}
	this.setHasSimCard = function() {
		_hasSimCard = false;
	}
}
Gsm.prototype.makeCall = function(caller, receiver, min) {
	var gsm = this;
	var newCall = new Call (caller, receiver, min);
	/*this.setLastOutgoingCall(newCall.getDuration());*/
	gsm.setOutgoingCallsDuration(min);
	
	gsm.setLastIncomingCall(min);
}

Gsm.prototype.getCallInfo = function(gsm, min) {
	return "Caller: " + this.getModel() + " Last outgoing call duration: " + min + "\n"
	+ "Total duration of outgoing calls " + this.getOutgoingCallsDuration()+ "\n"
	+ " Receiver: " + gsm.getModel()+ " Last incoming call duration: " + min;
}

/*Gsm.prototype.printInfoLastIncomingCall = function() {
	var callerID = this.getCaller();
	var receiverID = this.newCall.getReceiver();
	var duration = this.newCall.getDuration.call();
	var callCost = duration*pricePerMinute;
	return  "callerID: " + this.getModel.call();
	 + " call duraton: " + this.getLastIncomingCall() + " minutes ";
}*/
/*Gsm.prototype.printInfoLastOutgoingCall = function() {
	var duration = this.getDuration.call(newCall, duration);
}
*/
Gsm.prototype.getInfo = function (){
	return "model " + this.getModel() + "  has sim Card: " + this.getHasSimCard() 
	+ " device Number: " + this.getSimMobileNumber() + " outgoing calls total: " + this.getOutgoingCallsDuration();
	
}

var samsung = new Gsm ("Samsung");

var htc = new Gsm("HTC");

