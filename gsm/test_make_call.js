

var samsung = new Gsm('Samsung');
var htc = new Gsm('HTC');



samsung.insertSimCard(0899136399);
htc.insertSimCard(0884556677);

samsung.makeCall(htc,10);
htc.makeCall(samsung,25);


console.log(samsung.getInfo(htc, 10));
console.log(samsung.getCallInfo(htc, 10));


