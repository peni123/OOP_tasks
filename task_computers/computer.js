/**year – числова стойност показваща година на производство на компютъра
price – числова стойност (не е задължително да е цяло число) показваща
цената на компютъра
isNotebook – булева стойност – дали компютъра е преносим или не
hardDiskMemory – числова стойност за размера на хардиска
freeMemory – числова стойност показваща размера на свободната памет
operationSystem – текстово поле за операционната система на компютъра
 * 
 */

function Computer(number, money, type, hdmem, mem, sys ) {
	var _year = number;
	var _price = money;
	var _isNotebook = type;
	var _hardDiskMemory = hdmem;
	var _freeMemory = mem;
	var _operationSystem = sys;
	
	this.setYear = function (newYear) {
		if( typeof newYear === "number" && newYear / 1970 >= 1){
			_year = newYear;
		} else {
		throw new Error("Invalid number");
		}
	}
	this.getYear = function() {
		return _year;
	}
	this.setPrice = function (newPrice) {
		if( typeof newPrice === "number" && newPrice  > 0){
			_price = newPrice;
		}	else {
		throw new Error("Invalid number");
		}
	}
	this.getPrice = function() {
		return _price;
	}
	this.setIsNotebook = function(newType) {
		if( typeof newType === "boolean"){
			_isNotebook = newType;
		}else {
		throw new Error("Value must be true or false");
		}
	}
	this.getIsNotebook = function() {
		if (_isNotebook == true){
		return "notebook" ;
		} else {
			return "desktop"
		}
	}
	this.setHarDiskMemory = function(newHDMem) {
		if( typeof newHDMem === "number" && newHDMem  >= 0){
			_hardDiskMemory = newHDMem;
		}	else {
		throw new Error("Invalid number");
		}
	}
	this.getHarDiskMemory = function() {
		return _hardDiskMemory;
	}
	this.setFreeMemory = function(newMem) {
		if( typeof newMem === "number" && newMem  >= 0){
			_freeMemory = newMem;
		}	else {
		throw new Error("Invalid number");
		}
	}
	this.getFreeMemory = function() {
		return _freeMemory;
	}
	this.setOpertaionSystem = function(newOS) {
		if( typeof newOS === "string" && sys.length  > 0){
			_operationSystem = newOS;
		}	else {
		throw new Error("Invalid input, must be a string longer than 3 characters");
		}
	}
	this.getOperationSystem = function() {
		return _operationSystem;
	}
}



Computer.prototype.changeOperationSystem = function(newOpS) {
	var newOperationSystem = newOpS;
	this.setOpertaionSystem(newOperationSystem);
}
Computer.prototype.useMemory = function(mB) {
	var usedMemory = mB;
	var currenMemory = this.getFreeMemory();
	if (typeof usedMemory === "number" && currenMemory >= usedMemory) {
		var availableMemory = currenMemory - usedMemory;
	} else {
		alert("Not enough memory");
	}
	this.setFreeMemory(availableMemory);
}
Computer.prototype.getInfo = function() {
	return "Year of production: " + this.getYear() 
	+ ", price: " + this.getPrice() + ' ' + ", type: " + this.getIsNotebook() + " hardDiskMemory: " + this.getHarDiskMemory()
	+ ", freeMemory: " + this.getFreeMemory() + ", operationSystem: " + this.getOperationSystem();
		
}

var laptop = new Computer(2016, 2000, true, 1000, 500, "IOS" );
var desktop = new Computer(2010, 400, false, 600, 500, "Windows" );

laptop.changeOperationSystem('Windows');
desktop.useMemory(50);
console.log(laptop.getInfo());
console.log(desktop.getInfo());
