function runner(genFn) {
  const itr = genFn();

  function run(arg) {
    let rest = itr.next(arg);
    console.log(rest.value)
    if (rest.done)    {
      
      return rest.value;
    } else {
      return Promise.resolve(rest.value).then(run)
    }
  }

  return run();
}


doTask1 = function() {
  console.log("Task 1: ", )
  return 'A';
}

doTask2 = function(arg) {
  console.log("Task 2: ", arg)
  return 'B'
}

doTask3 = function(arg) {
  console.log("Task 3: ", arg)
  return 'C'
}

// runner(function*(){
//   const res1 = yield doTask1();
//   const res2 = yield doTask2(res1);
//   const res3 = yield doTask3(res2);
//   return res3;
// })

let r = function*(){
  const res1 = yield doTask1();
  const res2 = yield doTask2(res1);
  const res3 = yield doTask3(res2);
  return res3;
}()

r.next()

a = [1, 2, 3, 4]

dedupedArr = Array.from( new Set([ 1, 1, 'a', 'a', 'b', '1', 'b' ]) );
console.log(dedupedArr);
a = new Set([ 1, 1, 'a', 'a', 'b', '1', 'b' ])
console.log(">>> ", a)

var me = {
	'partOf' : 'A Team'
}; 

function myTeam(me2) {		
	me = {					
		'belongsTo' : 'A Group'
	}; 
} 	

myTeam(me);		
console.log(me);