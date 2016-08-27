var task1 = new Task ("Write Memo", 2);
var worker1 = new Employee ("Person1", task1, 8);
worker1.work(task1, 2);
console.log(worker1.showReport());


var task2 = new Task ("Department Meeting", 3);
var worker2 = new Employee ("Person2", task2, 7);
worker2.work(task2, 3);
console.log(worker2.showReport());
