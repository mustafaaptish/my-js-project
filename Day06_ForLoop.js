/*
  FOR LOOP

 */

  for(let i=0;i<=5;i++){
    console.log(i) // prints 0-5
// we can also do this
    console.log(`${i}`);// returns 0-5 as a string
  }

  // now we'll see an object of array
  const todos=[
    {
        id:1,
        task:'eat',
        isComplete:true
    },
    {
        id:2,
        task:'shopping',
        isComplete:true
    },
    {
        id:3,
        task:'take out dog',
        isComplete:false
    }

  ]
  console.log(todos)// prints everything
  console.log(todos[0])// this prints only the first object { id: 1, task: 'eat', isComplete: true }
  console.log(todos[0].task)// eat . >> go to the firdt object and give me the value/data for task

//    print ALL tasks ONLY
for(let i=0;i<todos.length;i++){
    console.log(todos[i].task) // eat, shopping, take out dog
}


//  1.USING MAP - now print and store same by using map() - this is returning an array
const map1=todos.map(
    function tasks(eachTask){
        // this returnsonly tasks
     return eachTask.task
    }
)
console.log(map1)// [ 'eat', 'shopping', 'take out dog' ] --> array

// 2.USING map and arrow function - looks much better
// this map ()  will take another function. eachItem is something that we defined(created)
const map2=todos.map(
    eachItem => eachItem.task
)
console.log(map2)// [ 'eat', 'shopping', 'take out dog' ]



// 3. FOR EACH - this is different from java's for each
// I need an empty array
const taskArray=[]

todos.forEach(
    eachObject => taskArray.push(eachObject.task)
)
console.log(taskArray)// [ 'eat', 'shopping', 'take out dog' ]

 // in the above example eachObject means each object from our todos object of array. Then we are getting the data for task only


