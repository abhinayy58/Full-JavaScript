// JAVASCRIPT TYPES
// number
// 3 + 4
// 7
// 4 + 5
// 9
// 7 -5
// 2
// 2 * 3
// 6
// 2 / 2
// 1
// 12 % 9
// 3

// String
// "bob"
// 'bob'
// "hello" + " there!"
// 'hello there!'
// "this isn't very nice"
// "this isn't very nice"
// 'this isn't very nice'
// VM2261:1 Uncaught SyntaxError: Unexpected identifier
// 'this isn\'t very nice'
// "this isn't very nice"
// 10 + 'abhinay'
// '10abhinay'
// 10 + "30"
// '1030'
// 10 - "3"
// 7

// boolean
// 3 > 2
// true
// 5 >10
// false
// true
// true
// false
// false
// 4 <= 10
// true
// 5 >10
// false
// 5 >= 5
// true
// 3 <= 3
// true
// 3 == 3
// true
// 3 ==="3"
// false
// 3 === 3
// true
// 3 !== 3
// false
// 4 !== 5
// true

 
// js Variable
// var

// var george = "these pretezals are making me thristy" + "!"
// undefined
// george
// 'these pretezals are making me thristy!'
// var george = "these pretezals are making me thristy" + "!"
// undefined
// george
// 'these pretezals are making me thristy!'
// prompt("what is your userName")
// 'Abhinay'
// var first = prompt("enter first number");
// var second = prompt("enter second number");
// undefined
// var sum = Number(first) + Number(second);
// undefined
// alert(sum)









// javascript conditional

// var name = 'Billy'
// if(name === "Billy") {
// alert('hi billy')
// }
// undefined
// name = 'susy'
// 'susy'
// if(name === "Billy") {
// alert('hi billy')
// }
// undefined
// if(name === 'Billy') {
// alert('hi billy') 
// } else { 
// alert("i dont know you")
// }
// undefined
// name = 'billy'
// 'billy'
// if(name === 'Billy') {
// alert('hi billy') 
// } else { 
// alert("i dont know you")
// }
// undefined
// name = 'Billy'
// 'Billy'
// if(name === 'Billy') {
// alert('hi billy') 
// } else { 
// alert("i dont know you")
// }

// if(name === 'Billy') {
//     alert('hi billy') 
//     } else if (name === 'susy'){ 
//     alert("hi susy")
//     } else {
//     alert("i dont know you")
//     }
//     undefined
//     name = 'susy'
//     'susy'
//     if(name === 'Billy') {
//     alert('hi billy') 
//     } else if (name === 'susy'){ 
//     alert("hi susy")
//     } else {
//     alert("i dont know you")
//     }
//     undefined
//     name = 'abhinay'
//     'abhinay'
//     if(name === 'Billy') {
//     alert('hi billy') 
//     } else if (name === 'susy'){ 
//     alert("hi susy")
//     } else {
//     alert("i dont know you")
//     }
    
// javascript logical operator

// if( name === 'Billy' || name === 'ann'){
//     alert("ji billy r ann")
//     }
//     undefined
//     name = "Billy"
//     'Billy'
//     if( name === 'Billy' || name === 'ann'){
//     alert("ji billy r ann")
//     }
//     undefined
//     if( name === 'Billy' && name === 'ann'){
//     alert("ji billy r ann")
//     }
//     undefined
//     var firstName = 'Abhinay'
//     var lastName  = 'Yadav'
//     if(firstName === 'Abhinay'&& lastName === 'Yadav'){
//     alert("hello Abhinay Yadav")
//     }
//     undefined
//     lastName = 'yadu'
//     'yadu'
//     var firstName = 'Abhinay'
//     var lastName  = 'Yadav'
//     if(firstName === 'Abhinay'&& lastName === 'Yadav'){
//     alert("hello Abhinay Yadav")
//     }
//     undefined
//     if(firstName === 'Abhinay'&& lastName === 'Yadav'){
//     alert("hello Abhinay Yadav")
//     }
//     undefined
//     lastName = 'yadu'
//     'yadu'
//     if(firstName === 'Abhinay'&& lastName === 'Yadav'){
//     alert("hello Abhinay Yadav")
//     }

// if(!(name = 'bill')) {
//     alert('Hi billy')
//     }
//     undefined
//     name = 'susy'
//     'susy'
//     if(!(name = 'bill')) {
//     alert('Hi billy')
//     }
//     undefined
//     var name = 'susy'
//     undefined
//     if(!(name = 'bill')) {
//     alert('Hi billy')
//     }
//     undefined
//     var name = 'bill'
//     undefined
//     if(!(name = 'bill')) {
//     alert('Hi billy')
//     }
//     undefined
//     !true
//     false
//     !false
//     true

// javascript functions

// built in function 
// alert
// ƒ alert() { [native code] }
// prompt
// ƒ prompt() { [native code] }
// prompt()
// ''
// alert()
// undefined
// prompt()
// ''

// ------------------------------
// our own function
// 1 - function declaration

// function sayhello(){
//     console.log("heloo")
// }
// sayhello();

// 2 - function expression

// var sayBye = function() {
//     console.log("bye")
// }
// sayBye();


// exercise
// function sing() {
//     console.log('ahhhhhhhhhh')
//     console.log('teeeeeeeeee')
// }

// sing();

// function sing(song) {
//     console.log(song)
    
// }

// sing("laaa diii doo");
// sing("laaa diii doo");
// sing("laaa diii doo");

// function multiply(a,b){
//     console.log(a,b)
//     return a * b
// }
// multiply();

// function mul(a,b) {
//     if(a>10||b>10){
//         return "thats too hard"
//     } else {
//         return a * b
//     }
// }
// mul(5,2)


// Data Structure - Array

// var list = ["tiger", "cat", "bear", "bird"];

// console.log(list[0]);

// var list =[
//     ["tiger", "cat", "bear", "bird"]
//    ];
//    undefined
//    list
//    [Array(4)]0: Array(4)0: "tiger"1: "cat"2: "bear"3: "bird"length: 4[[Prototype]]: Array(0)length: 1[[Prototype]]: Array(0)
//    console.log(list[0][2])
//    VM896:1 bear
//    undefined

// Array method

// var list = ["tiger", "cat", "bear", "bird"];
// undefined
// list.shift();
// 'tiger'
// list
// (3) ['cat', 'bear', 'bird']
// list.pop()
// 'bird'
// list
// (2) ['cat', 'bear']
// list.push("elephant")
// 3
// list
// (3) ['cat', 'bear', 'elephant']
// list.concat(["bee","deer"])
// (5) ['cat', 'bear', 'elephant', 'bee', 'deer']0: "cat"1: "bear"2: "elephant"3: "bee"4: "deer"length: 5[[Prototype]]: Array(0)
// list
// (3) ['cat', 'bear', 'elephant']
// list.sort()
// (3) ['bear', 'cat', 'elephant']
// var myList = ['cat', 'bear', 'elephant', 'bee', 'deer']
// undefined
// var mynewList = myList.concat(["monkey"])
// undefined
// mynewList
// (6) ['cat', 'bear', 'elephant', 'bee', 'deer', 'monkey']


// Data Structure - object

// var user = {
//     name: "jhon",
//     age: 34,
//     hobby: "soccer",
//     isMarried: false
// }

// undefined
// user
// {name: 'jhon', age: 34, hobby: 'soccer', isMarried: false}age: 34hobby: "soccer"isMarried: falsename: "jhon"[[Prototype]]: Object
// user.name
// 'jhon'
// user.age
// 34
// user.isMarried
// false
// user.hobby
// 'soccer'
// user.favouriteFood = "spinach";
// 'spinach'
// user
// {name: 'jhon', age: 34, hobby: 'soccer', isMarried: false, favouriteFood: 'spinach'}
// user.isMarried = true;
// true


// var user = {
//     name: "jhon",
//     age: 34,
//     hobby: "soccer",
//     isMarried: false,
//     spells: ["abrakadabra","shazam","boo"],
//     shout: function() {
//         console.log("ahhhhhh!")
//     }
// };

// var arr = [
//     {
//         username: "ABHINAY",
//         password: "sec"
//     },
//     {
//         username: "jess",
//         password: 123
//     }
// ];

// user.spells
// (3) ['abrakadabra', 'shazam', 'boo']
// user.spells[1]
// 'shazam'
// arr[0].password
// 'sec'
// user.shout()
// ahhhhhh!

// user.shout()
// index.js:384 ahhhhhh!
// undefined
// console
// console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
//  console.info("jello")
// VM3755:1 jello
// undefined
//  console.error("jello")
// VM3790:1 jello
// (anonymous) @ VM3790:1
// undefined
// var user1 = {}
// undefined
// var list2 =[]
// undefined
// user1
// {}
// list2

// []
// var emptyobj = {}
// undefined
// var nullobj = null;
// undefined
// emptyobj
// {}
// nullobj
// null
// nullobj.name ="Abdy"
// VM4197:1 Uncaught TypeError: Cannot set properties of null (setting 'name')
//     at <anonymous>:1:14
// (anonymous) @ VM4197:1
// emptyobj.name = "Andy";
// 'Andy'
// emptyobj
// {name: 'Andy'}


// undefined

// var a = true;
// undefined
// a
// true
// a = "hello"
// 'hello'
// a
// 'hello'

// var b;
// undefined
// b
// undefined
// var password;
// undefined
// password
// undefined

// var database = [
//     {
//         userName: "abhinay",
//         password: "12345"
//     }
// ]

// var newsFeed = [
//     {
//         username: "bobby",
//         timeline: "so tired from all that learn"
//     },
//     {
//         username: "Saily",
//         timeline: "JavaScript is soooo cooool!"
//     }
// ]

// var userNamePrompt = prompt("what is your username?");
// var passwordPrompt = prompt("what your password?");

// function signIn(user,pass) {
//     if(user === database[0].userName && pass === database[0].password){
//         console.log(newsFeed);
//     } else {
//         alert("sorry, worng username and password!")
//     }
// }

// signIn(userNamePrompt, passwordPrompt);


// function declaration
 
// function newfun() {

// }

// function expression

// var newfunc = function() {

// };

// expression
// 1+3
// var a = 21;
// return true;

// calling or invoking a function

// alert();
// newfunction(param1,param2)

// assign a variable
// var a = true;

// function vs method

// function thisisMethod() {

// }

// thisisMethod()

// var obj = {
//     thisIsmethod: function() {

//     }
// }

// obj.thisIsmethod()



// loop in javascript
 
 // for loop

// var todos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];

// for(var i=0; i < todos.length; i++){
//     console.log(todos[i] + '!')
// }

// effect todos

// var todos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];

// for(var i=0; i < todos.length; i++){
//    todos[i] = todos[i] + "!"
// }

// while loop

// var count = 0;
//  while (count < 10){
//      console.log(count)
//      count++
//  }

// do.....while

// var count = 10;
// do {
//     console.log(count);
//     count--
// } while (count > 0)

// forEach

// var todos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];
// function log(todo ,i){
//     console.log(todo, i)
//  }

// todos.forEach(log);

// excercise

// var database = [
//         {
//             userName: "abhinay",
//             password: "12345"
//         },
//         {
//             userName: "sally",
//             password: "12345"
//         },
//         {
//             userName: "solty",
//             password: '12345'
//         }
//     ]
    
//     var newsFeed = [
//         {
//             username: "bobby",
//             timeline: "so tired from all that learn"
//         },
//         {
//             username: "Saily",
//             timeline: "JavaScript is soooo cooool!"
//         }
//     ]
    
//     var userNamePrompt = prompt("what is your username?");
//     var passwordPrompt = prompt("what your password?");
    
//     function isuserValid(user, pass){
//         for(var i= 0; i < database.length; i++) {
//             if(database[i].userName === user && 
//                 database[i].password === pass){
//                 return true;
//             } 

//         }
//   return false;
//     }
//     function signIn(username, password){
//         if(isuserValid(username,password)){
//                     console.log(newsFeed);
//                 } else {
//                     alert("sorry, worng username and password!")
//                 }
        
//     }
    
//     signIn(userNamePrompt, passwordPrompt);


// scope 
// by javascript is root scope or window scope


// function aa() {
//     console.log("test")
// }

// function bb() {
//     var a = "hello"
//     console.log(a)
// }

// bb()


// by default function can access to root variable



// var b ="can i access this?"

// function bb() {
//     console.log(b)
// }

// bb()


// var b = "hi Abhinay yadav"

// function bb() {
//    var b = "hello"
// console.log(b)
// }

// bb()


// var fun = 5;

// function funfunc(){
//     var fun = "hello"
//     console.log(1, fun)
// }

// function funerfunc(){
//     var fun = "bye"
//     console.log(2, fun)
// }

// function funestfunc(){
//     fun = "AHHHH"
//     console.log(3, fun)
// }

// console.log("window", fun)
// funfunc();
// funerfunc();
// funestfunc();
// console.log(fun)


// root scope

// var fun = 5;

// function funer() {
//     //child scope
//     console.log(fun)
// }

// funer();

// Adavance javascript
// Javascript conditionals

// ternary operator

// condition ? expression1 : expression2

// function isuserValid(bool){
//     return bool;
// }

// var ans = isuserValid(true) ? "you can enter" : "access denied"

// var auto = "your account number is" + (isuserValid(true) ? "1234" : "not valid")



// switch

// function movecommand(direction) {
//     var whatHappen;
//     switch(direction){
//             case "forward":
//             whatHappen = "you encounter a monsteer";
//             break;
//             case "back":
//             whatHappen = "you encounter a home";
//             break;
//             case "right":
//             whatHappen = "you encounter a river";
//             break;
//             case "left":
//             whatHappen = "you encounter a troll";
//             break;
//           default:
//               whatHappen = "please enter a valid direction"  
//     }
//     return whatHappen;
// }

// movecommand("forward")
// 'you encounter a monsteer'
// movecommand("left")
// 'you encounter a troll'
// movecommand("right")
// 'you encounter a river'
// movecommand("back")
// 'you encounter a home'


// javascript variables
// let and const




// const player = "bobby";
// let experience = 100;
// var wizardlevel = false;

// if(experience >90) {
//     var wizardlevel = true;
// }



// const player = "bobby";
// let experience = 100;
// let wizardlevel = false;

// if(experience >90) {
//     let wizardlevel = true;
//     console.log("inside", wizardlevel)
// }
// console.log("outside", wizardlevel)


// use const when you don't want changes
// use let when you want to change in variable value like boolean,or value - for reassigned

// const obj = {
//     player: "booby",
//     experience: 100,
//     wizardLevel: false
// }


// obj
// {player: 'booby', experience: 100, wizardLevel: false}
// obj = 5
// VM10181:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:5
// (anonymous) @ VM10181:1
// obj.wizardLevel =true
// true
// obj
// {player: 'booby', experience: 100, wizardLevel: true}

// const - can't be change the  const or reassigned but it can change the property



// destructuring

// before

// const obj = {
//     player: "booby",
//     experience: 100,
//     wizardLevel: false
// }


// const player = obj.player;
// const experience = obj.experience;
// const wizardLevel = wizardLevel;

// after

// const {player, experince} = obj;
// let {wizardLevel} = obj;

// object properties
// const name = "jhon snow"

// const obj = {
//     [name]:"hello",
//     [1 + 2]: 'hihi'

// }

// const a = "simon";
// const b =true;
// const c = {}

// const obj = {
//     a,
//     b,
//     c
// }

// template string
//before
// const name = "Abhinay"
// const greeting = "well"
// const greet = " hello " + name + " you seem to be doing "  +  greeting + " !"


// after

// const greetin = `hello ${name} i hope you are doing ${greeting}`

// default argument

// function greet(name = "Abhinay",greeting = "well") {
//  return `hello ${name} i hope you are doing ${greeting}`
// }


// javascript types

// symbol

// let sym1 = Symbol();
// let sym2 = Symbol('foo');
// let sym3 = Symbol('foo')


// javascript function
// arrow function

// before

// function add(a,b){
//     return a + b
// }
// add()


//after 

// const adds = (a,b) => a+b;
// add(2,4)
// 6
// adds(2,4)
// 6

// Advance Javascript


// Advacnce function


// clousure
// the function run, the run executed and it's never gonna execute again. but gonna remember that there are refrences to variable so the child scope always has access to the parent scope 

// const first = () => {
//     const greet = "hi";
//     const second = () => {
//         alert(greet)
//     }
//     return second;
// }

// const newFunc = first()

// newFunc();

// currying - And curring is the process of converting a function that takes multiple arguments into a function

// that takes them one at a time.

// const multiply = (a,b) => a*b;

// const curriedmul = (a) => (b) => a * b;
// // curriedmul(3)


// const multiplyby5 = curriedmul(5)


// compose - compose is the act of putting two functions together to form a third function where the output of

// one function is the input of the other.

// const compose = (f,g) => (a) => f(g(a));

// const sum = (num) => num + 1;

// compose(sum, sum)(5)


// the idea of avoiding side effects. And functional purity.

// Adavance Array 

// const array = [1,2,10,16]
// const double = []
// const newArray = array.forEach((num) => {
//     double.push(num * 2)
// })

// console.log(double)


// map, filter, reduce

// map

// const mapArray = array.map((num) => {
//     return num * 2
// })
// console.log(mapArray);
// (4) [2, 4, 20, 32]

// filter

// const filterArr = array.filter(num => {
//     return num > 5
// })


// reduce

// const reduceArr = array.reduce((acc, num) => {
//      return acc + num
// },0)


// Advance object concept

// refrence type
// context
// instantiation


// reference type

// [] === []
// false
// [1] === [1]
// false
// var object1 = { value :10}
// undefined
// var object2 = object1;
// undefined
// var object3 = { value: 10};
// undefined
// object1 === object2
// true
// object1 === object3
// false
// object1.value = 15
// 15
// object2.value
// 15
// object3
// {value: 10}


// var object1 = {value : 10}
// var object2 = object1;
// var object = {value: 10}

// context
// function a() {
//     let a =4;
// }
// console.log(a())

// console.log(this);

// const object4 = {
//     a: function() {
//         console.log(this)
//     }
// }


// instantation

//  class Player {
//      constructor(name, type){
//          this.name = name;
//          this.type = type;
//      }
//     introduce() {
//         console.log(`hi I'm a ${this.name}, I'm a ${this.type}`)
//     }

//  } 


// class wizard extends Player {
//     constructor(name,type){
//         super(name,type)
//     }
//     play() {
//         console.log(`I'm a ${this.type}`);
//     }
// }


// const wizard1 = new wizard("shelly", "healer")
// const wizard2 = new wizard("Abhinay", "thunder")

// wizard1.introduce
// ƒ introduce() {
//         console.log(`hi I'm a ${this.name}, I'm a ${this.type}`)
//     }
// wizard1.introduce()
// index.js:1039 hi I'm a shelly, I'm a healer
// undefined
// wizard1.play()
// I'm a healer
// undefined
// wizard2.introduce()
// hi I'm a Abhinay, I'm a thunder
// undefined
// wizard2.play()
//  I'm a thunder
// undefined


// ES7

// include on string or array

// const pets = ['cat','dog','bat'];
// pets.includes('cat')
// true
// pets.includes('bear')
// false

// exponential operator

// const square = (x) => x**2;
// square(2)
// 4
// square(6)
// 36

// const cube = (x) => x**3;
// cube(4)
// 64
// cube(5)
// 125

// ES8

// string padding

// .padstart()
// .padEnd()

// 'Turtule'.padStart(10);
// '   Turtule'
// 'Turtule'.padEnd(10);
// 'Turtule   '

//  trailing commas and functions, parameter lists and calls.

// const fun = (a,b,c,d,) => {
//     console.log(a)
// }
// fun(1,2,3,4,)


// Object.value
// object.entries
// object.keys

// let obj = {
//     username0: 'santa',
//     username1: 'Abhinay',
//     username2: 'Solty'
// }

// // Object.keys
// Object.keys(obj).forEach((key, index) => {
//     console.log('keys', key, obj[key])
// })

// // object.values

// Object.values(obj).forEach(value => {
//     console.log('values', value)
// })

// // Object.entries

// Object.entries(obj).forEach(value => {
//     console.log('entries', value)
// })

// Object.entries(obj).map(value => {
//     return value[1] + value[0].replace('username', '');
// })

// ['santa0', 'Abhinay1', 'Solty2']


// ES10

// flat()

// const array = [1,[2,3],[4,5]]
// array.flat()

// const entries = ['bob', 'sally',,,,,,'cindy']
// entries.flat()


// flatMap

// const array = [1,[2,3],4,5]

// const flatmp = array.flatMap(value => value + "!")

// trimStart()
// trimEnd()

// var userEmail1 = "            abhinayy482gmail.com";
// var userEmail2 = "abaya17cs@cmrit.ac.in      "


// userEmail1.trimStart()
// 'abhinayy482gmail.com'
// userEmail2.trimEnd()
// 'abaya17cs@cmrit.ac.in'


// fromEntries

// userprofile = [['commander',23],['drek',40],['abhi',30]]

// console.log(Object.fromEntries(userprofile))

// console.log(Object.entries(userprofile))

// {commander: 23, drek: 40, abhi: 30}
// abhi: 30
// commander: 23
// drek: 40
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ['0', Array(2)]
// 1: (2) ['1', Array(2)]
// 2: (2) ['2', Array(2)]

// try ... catch block

// try {
//     true + "hi"
// } catch {
//     console.log('you messed up')
// }

// 'truehi'

// try {
//     bob + "hi"
// } catch(error) {
//     console.log('you messed up',error)
// }

// you messed up ReferenceError: bob is not defined
//     at <anonymous>:2:5


// Advance loop


// const basket = ['apple', 'orange', 'grape'];

// 1

// for(let i = 0; i < basket.length; i++) {
//     console.log(basket[i])
// }

 // 2

//  basket.forEach(item => {
//      console.log(item)
//  })


// 3 - for of
// iterating-we able to go one by one - in string or array

// for(item of basket){
//     console.log(item)
// }



// 4 - for in - it work with object - it is enumerating

// const detailBasket = {
//     apple:5,
//     oranges:10,
//     grapes: 1000
// }

// for(item in detailBasket){
//     console.log(item)
// }

// ES2020

// BigInt
// Nullish coalescing  operator -??
// Optional chaining Operator - ?.

// Promise.allsettled
// gloablThis

// BigInt

// typeof 4
// 'number'
// typeof true
// 'boolean'
// typeof 1n
// 'bigint'

// Number.MAX_SAFE_INTEGER
// 9007199254740991
// 9007199254740991 + 1
// 9007199254740992
// 9007199254740991 + 10
// 9007199254741000
// 90071992547401000 - 1
// 90071992547401000
// 90071992547401000n + 100n
// 90071992547401100n

// Nullish coalescing Operator ??
//  let will_pokemon = {
//         pikachu: {
//             species: 'Mouse pokemon',
//             height: 0.4,
//             weight: 6
//         }
//     }
    
//     let abhi_pokemon = {
//         booster: {
//             species: 'Mice pokemon',
//             height: 0.8,
//             weight: 30,
//             power: 0
//         }
//     }

    // before

// let power = abhi_pokemon?.booster?.power || 'no power'
// console.log(power)

// let power = abhi_pokemon?.booster?.power ?? 'no power'
// console.log(power)



// Optional Chaining Operator

// let will_pokemon = {
//     pikachu: {
//         species: 'Mouse pokemon',
//         height: 0.4,
//         weight: 6
//     }
// }

// let abhi_pokemon = {
//     booster: {
//         species: 'Mice pokemon',
//         height: 0.8,
//         weight: 30
//     }
// }

// Before

// let weight = will_pokemon.pikachu.weight
// console.log(weight)

// let Abhi_weight = abhi_pokemon.pikachu.weight
// console.log(Abhi_weight)

// after

// let weight3 = abhi_pokemon?.pikachu?.weight

// console.log(weight3)




// GlobalThis

// globalThis
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// globalThis === window
// true
// window
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// ES2021
// Replaceall

// const str = 'ZTM is the best of the best'
// str.length
// 27
// str.replaceAll('best','worst')
// 'ZTM is the worst of the worst'
// str
// 'ZTM is the best of the best'
// const b = str.replaceAll('best','worst')
// undefined
// b
// 'ZTM is the worst of the worst'

// debugging

// const flattend = [[0,1],[2,3],[4,5]].reduce(
//     (acc,arr) => {
//         console.log('Array', arr)
//         console.log('Accumulator',acc)
//       //  debugger
//         return acc.concat(arr)
//     } ,[])

//     flattend
//     (6) [0, 1, 2, 3, 4, 5]


// javascript evelopment or javascript modules

// 1 - Inline Script
// 2 - script tags
// 3 - IIFE (Imediately invoked function execution)
// 4 - Browserify
// 5 - webpack + ES6




// Javascript foundation

// Javascript Engine

// how to Javascript work
//  JSfile -> Parser -> AST (Abstract syntax tree) -> Intepreter -|Bytecode| -> Profiler -> Compiler -> Optimized Code -> 11010101

// JSengine small proto

// function jsengine(code) {
//     return code.split(/\s+/)
// }

// jsengine('var a = 5')

// ['var', 'a', '=', '5']


// Interpreter vs compiler

// function someCalculation (x,y) {
//     return x + y
// }

// for( let i =0; i< 100; i++) {
//     someCalculation(5,4)
//     console.log(i)
// }

// compiler - Well, a compiler I like an interpreter doesn't translate on the fly.What it does is it works ahead of time to create a translation of what code we've just written.And it compiles down to usually a language that can be understood by our machines.

// the most language are both interpreted and compiled.And javascript is both
// javascript is comination of both and called JIT(Just In Time) compiler


// writting optimized code

// Don't use this to write optimized code
 // eval(),arguments,for in,with,delete
 // Hidden classes, Inline caching

// Inline caching

// function finduser(user) {
//     return `found ${user.firstName} ${user.lastName}`
// }

// const userData = {
//     firstName: 'Jhonson',
//     lastName: 'Junior'
// }

// finduser(userData)

// Hidden classes

// function Animal(x,y){
//     this.x = x;
//     this.y = y;
// }

// const obj1 = new Animal(1,2);
// const obj2 = new Animal(3,4);

// obj1
// Animal {x: 1, y: 2}
// obj2
// Animal {x: 3, y: 4}
// obj1.a = 30
// 30
// obj1.b = 100
// 100
// obj2.b = 30
// 30
// obj2.a = 100
// 100
// obj1
// Animal {x: 1, y: 2, a: 30, b: 100}
// obj2
// Animal {x: 3, y: 4, b: 30, a: 100}


// Web assembly -We have the standard binary executable format called Web Assembly.

// Call Stack and Memory heap

// Call Stack- is keep track where our program is running
// function sub2(num) {
//     return num -2;
// }
// function calculate() {
//     const sumTotal = 4 + 5;
//     return sub2(sumTotal);
// }
// debugger;
// calculate()




// Memory Heap - is to store and write imformation and code.we place to allocate memory,use memory,and release memory

// const number = 610; // allocate memory for number
// const string = 'some text' // allocate memory for a string

// const human = { // allocate memory for our object and their value
//     first:'Abhinay',
//     last: 'Yadav'
// }


// javascript frame is used to communicate between call stack and memory heap 



// stack overflow

// function a() {
//     a()
// }

// undefined
// a()

// Garbage Collector

// In javascript for grabage collector it uses mark and sweep algorithm.


// memory leak
// let array = [];
// for(let i =5 i > 1; i++) {
//     array.push(i-1)}
//     }

// Global variable - Memory Leak

// var a = 1;
// var b = 1;
// var c = 1;

// event listeners -Memory leak

// var element = document.getElementById('button');
// element.addEventListener('click', onclick)

// with setInterval - Memory Leak
// setInterval(() => {
//     // refrence object....
// })

// Single thread problem
// What problems do you see with Synchronoss code?


// Well, with single threaded Synchronoss code that JavaScript engine runs.It's going to make it really, really difficult if we have long running task.

// Javascript Runtime 

// console.log('1')
// setTimeout(() => {
//     console.log('2')
// }, 1000);
// console.log('3')


// function printHello() {
//     console.log('Hello from baz');
// }

// function baz() {
//     setTimeout(printHello, 3000);
// }

// function bar() {
//     baz();
// }

// function foo() {
//     bar();
// }

// foo();


// Exercise 
//fill array with 60000 elements
// const list = new Array(60000).join('1.1').split('.');
 
// function removeItemsFromList() {
//     var item = list.pop();
 
//     if (item) {
//         removeItemsFromList();
//     }
// };
 
// removeItemsFromList();


// const list = new Array(60000).join('1.1').split('.');

// function removeItemsFromList() {
//     var item = list.pop();

//     if (item) {
//       setTimeout(removeItemsFromList, 0);
//     }
// };

// removeItemsFromList();

// list

// Asynchronous Javascript


//1
// setTimeout(()=>{console.log('1', 'is the loneliest number')}, 0)
// setTimeout(()=>{console.log('2', 'can be as bad as one')}, 10)

//2
// Promise.resolve('hi').then((data)=> console.log('2', data))

//3
// console.log('3','is a crowd')


// Javascript II

// Execution context

// function printName(){
//     return 'Abhinay Yadav'
// }
// function findName() {
//     return printName()
// }
// function sayMyname(){
//     return findName()
// }
// sayMyname()

// 'Abhinay Yadav'

// Global Execution Context -> Global Object -> this -> 
//      there is also Hoisting in creation phase

// creation phase
// ------------------------------------------
// execution phase
// second face
// Run Your code

// Lexical Environment

 // In javascript our lexical scope (available data + variables where the function was defined) determines our available variable.Not where the function is called (dynamic scope) 


// Hoisting

// exercise - 1
// console.log('1--------')
// console.log(teddy)
// console.log(sing())
// var teddy = 'bear';
// function sing() {
// console.log('ohh laala')
// }



// console.log(one)
// var one =1;
// var one =2;
// undefined

// console.log(one)
// var one =1;
// var one =2;

// exercise - 2

// var favouriteFood = "grapes";

// var foodThoughts = function () {
//      console.log("Original favourite food: " + favouriteFood);

//      var favouriteFood = "sushi";

//      console.log("New favourite food: " + favouriteFood);
// };

// foodThoughts()

// P.s. when you change the 'var' to 'const' technically there is still hoisting happening. That is why you get a reference error instead of looking at the global favouriteFood variable. let and const hoist but you cannot access them before the actual declaration is evaluated at runtime. So the engine says, "ya there is a favouriteFood variable here but you can't access it yet"


// exercise 3

// function bigBrother(){
//     function littleBrother() {
//       return 'it is me!';
//     }
//     return littleBrother();
//     function littleBrother() {
//       return 'no me!';
//     }
//   }
  
//   // Before running this code, what do you think the output is?
//   bigBrother();


// function Expression
// var cannada = function(){
//     console.log('canada is extremly cold')
// }

// Arrow function

// var cannada = () => {
//     console.log('cold')
// }
// function declaration
// function india(){
//     console.log('india is hot')
// }

// function Invocation/function call/ function execution 
// cannada()
// india()


// don't use arguments
// function marry(person1,person2){
//     console.log(arguments)
//     return `${person1} is now married to ${person2}`
// }

// marry('abhinay','arti')

// Global Execution Context -> Global Object -> this -> arguments -> || Variable Environment
//      there is also Hoisting in creation phase

// creation phase
// ------------------------------------------
// execution phase
// second face
// Run Your code



// Solution 1 - instead use
// function marry(person1,person2){
//         console.log('arguments',arguments)
//         console.log(Array.from(arguments))
//         return `${person1} is now married to ${person2}`
//     }
    
//     marry('abhinay','arti')

// Solution 2 - instead use

// function marry2(...args){
//         console.log('arguments', args)
//         console.log(Array.from(arguments))
//         return `${args[0]} is now married to ${args[1]}`
//     }
    
//     marry2('abhinay','arti')


//Variable Environement
// function two() {
//   var isValid; // 5. isValid is undefined in this execution context.
// }

// function one() {
//   var isValid = true; // 3. this variable will be put into the new execution context. It's own variable environment
//   two(); // 4. New execution context created.
// }

// var isValid = false; // 1. Global variable is created as undefined. Then during execution, it changes in memory to false.
// one() // 2. New execution context is created on top of the stack.


// Scope Chain

// function findName() {
//     var b ='b'
//     return printName();
// }
// function printName(){
//     var c ='c'
//     return 'Abhinay Yadav'
// }
// function sayMyname() {
//     var a = 'a';
//     return findName();
// }

// sayMyname()

// 'Abhinay Yadav'



// function sayMyname() {
//     var a = 'a'
//     return function findName() {
//         var b = 'b'
//         return function printName() {
//             var c = 'c';
//             return 'Abhinay Yadav'
//         }
//     }
// }
// sayMyname()
// ƒ findName() {
//         var b = 'b'
//         return function printName() {
//             var c = 'c';
//             return 'Abhinay Yadav'
//         }
//     }
// sayMyname()()
// ƒ printName() {
//             var c = 'c';
//             return 'Abhinay Yadav'
//         }
// sayMyname()()()
// 'Abhinay Yadav'



// function sayMyname() {
//     var a = 'a'
//     return function findName() {
//         var b = 'b'
//         console.log(a,b)
//         return function printName() {
//             var c = 'c';
//             console.log(a,b,c)
//             return 'Abhinay Yadav'
//         }
//     }
// }

// sayMyname()()()


// [scope]


// function scope vs block scope

// if(5 > 4){
//     var secret = '12345';
// this is block scope
// }
// secret;
// solution is const and let


// function a() {
//     var sec = '12345'
// }
// function scope- with function scope we can not access in function block

// sec;




// function loop(){
//     for(var i =0; i<5; i++){
//         console.log(i)
//     }
//     console.log('final',i)
// }

// function loop(){
//     for(let i =0; i<5; i++){
//         console.log(i)
//     }
//     console.log('final',i)
// }
// loop()



// global variable



// IIFE
// (function a() {
//     console.log("abhinay")
// })();

// var script =(function() {
//     console.log('yadav')
// })();



// this keywords

//  this is the  object  that the function is property of.

// this
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}



// function a(){
//     console.log(this)
// }

// a() // it is property of window

// function b(){
//     'use strict'
//     console.log(this)
// }
// b() // undefined



// const obj = {
//     name: 'billy',
//     sing() {
//         return ` Hello ${this.name}`
//     },
//     singAgain() {
//            return `${this.sing()} !`
//     }
// }

// obj.sing()

//  Importance of this keyword
// 1 - Give method access to their object
// 2 - Executes same code for multiple objects
 
// function importantPerson() {
//     console.log(this.name + '!')
// }


// const name = 'sunny';

// const obj1 = {
//     name: 'cassy',
//     importantPerson: importantPerson
// }
// const obj2 = {
//     name: 'jackob',
//     importantPerson:importantPerson
// }


// Exercise : Dynamic scope vs lexical scope

// Eg-1
// const a = function() {
//     console.log('a', this)
//     const b = function(){
//         console.log('b', this)
//         const c = {
//             hi() {
//                 console.log('c', this)
//             }
//         }
//         c.hi()
//     }
//     b()

// }
// a()


// Eg - 2

// const obj = {
//     name: 'Abhinay',
//     sing() {
//         console.log('a', this);
//         var anotherFunc = function(){
//             console.log('b', this)
//         }
//         anotherFunc()
//     }
// }

// obj.sing()
// a {name: 'Abhinay', sing: ƒ}
// b Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// Solution - 1 - using arrow function

// const obj = {
//     name: 'Abhinay',
//     sing() {
//         console.log('a', this);
//         var anotherFunc = () => {
//             console.log('b', this)
//         }
//         anotherFunc()
//     }
// }


// obj.sing()
// a {name: 'Abhinay', sing: ƒ}
// b {name: 'Abhinay', sing: ƒ}

// solution - 2 - using bind method

// const obj = {
//     name: 'Abhinay',
//     sing() {
//         console.log('a', this);
//         var anotherFunc = () => {
//             console.log('b', this)
//         }
//         return anotherFunc.bind(this)
//     }
// }
// obj.sing()()
// a {name: 'Abhinay', sing: ƒ}
// b {name: 'Abhinay', sing: ƒ}

// solution - 3

// const obj = {
//     name: 'Abhinay',
//     sing() {
//         console.log('a', this);
//         var self =this;
//         var anotherFunc = () => {
//             console.log('b', self)
//         }
//         anotherFunc()
//     }
// }

// obj.sing()
//  {name: 'Abhinay', sing: ƒ}
// {name: 'Abhinay', sing: ƒ}

// call(), apply() and bind()

// call or apply

//  function a() {
//      console.log('hi')
//  }
// a.call()
// a.apply()


// const wizard = {
//     name:'Abhinay',
//     health: 50,
//     heal() {
//         return this.health = 100
//     }
// }

// const archer = {
//     name:'Robin hood',
//     health: 30,

// }
// console.log('1', archer)
// wizard.heal.call(archer)
// console.log('2', archer)
// 1 {name: 'Robin hood', health: 30}
// 2 {name: 'Robin hood', health: 100}


// const wizard = {
//     name:'Abhinay',
//     health: 50,
//     heal(num1,num2) {
//         return this.health += num1+num2;
//     }
// }

// const archer = {
//     name:'Robin hood',
//     health: 30,

// }
// console.log('1', archer)
// wizard.heal.call(archer, 50, 30)
// console.log('2', archer)
// 1 {name: 'Robin hood', health: 30}
// 2 {name: 'Robin hood', health: 110}

// with call it take parameter as arguments with comma(,)


// const wizard = {
//     name:'Abhinay',
//     health: 50,
//     heal(num1,num2) {
//         return this.health += num1+num2;
//     }
// }

// const archer = {
//     name:'Robin hood',
//     health: 30,

// }
// console.log('1', archer)
// wizard.heal.apply(archer, [50, 30])
// console.log('2', archer)

// 1 {name: 'Robin hood', health: 30}
// 2 {name: 'Robin hood', health: 110}

// with apply it array as parameter


// bind

// const wizard = {
//     name:'Abhinay',
//     health: 50,
//     heal(num1,num2) {
//         return this.health += num1+num2;
//     }
// }

// const archer = {
//     name:'Robin hood',
//     health: 30,

// }
// console.log('1', archer)
// const healArcher = wizard.heal.bind(archer,50, 30)
// console.log('2', archer)

// console.log(healArcher())



// Exercise

// How would you implement this:

// const array = [1,2,3];
 
// function getMaxNumber(arr){
//   //code here  
// }
 
// getMaxNumber(array) // should return 3

// solution 

// const array = [1,2,3];

// // in this case, the 'this' keyword doesn't matter!
// function getMaxNumber(arr){
//   return Math.max.apply(null, arr);  
// }

// getMaxNumber(array)

// bind() and currying

// function currying

// function curry(a,b) {
//     return a * b
// }

// let multiplyby2 = curry.bind(this, 2)



// console.log(multiplyby2(5))


// Exercise

// var b = {
//     name: 'jay',
//     say() {console.log(this)}
//   }
  
//   var c = {
//     name: 'jay',
//     say() {return function() {console.log(this)}}
//   }
  
//   var d = {
//     name: 'jay',
//     say() {return () => console.log(this)}
//   }


// exercise 2






// const character = {
//     name: 'Simon',
//     getCharacter() {
//       return this.name;
//     }
//   };
//   const giveMeTheCharacterNOW = character.getCharacter.bind(character);
  
  
//   console.log('?', giveMeTheCharacterNOW());
  

// Javascript types

// Number // 5
// Boolean // true
// String // "hello"
// null // null
// Symbol('just me') // Symbol
// {} //{value:10}

// typeof 5
// 'number'
// typeof true
// 'boolean'
// typeof undefined
// 'undefined'
// typeof null
// 'object'
// typeof Symbol('just me')
// 'symbol'
// typeof {}
// 'object'
// typeof []
// 'object'
// typeof function(){}
// 'function'


// function and array is object in javascript


// function a() {
//     return 5;
// }
// a.hi = 'hihihi'

// console.log(a.hi)



// primitive

// Number
// Boolean
// String
// undefined
// null
// Symbol


// noo-primitive

// {} //object
// [] // array
// function(){} // function


// Array - how to it is an array.

// var array =[1,2,3];

// Array.isArray




// Pass by value  ||  Pass by refrence

// var a =5;
// var b = a;

// b++
// console.log(a)
// console.log(b)


// pass by Reference with object
// let obj1 =  {
//     name: 'yoa',
//     password: '123'
// }

// let obj2 = obj1

// obj2.password = 'Abhinay'

// console.log(obj1)
// console.log(obj2)

// {name: 'yoa', password: 'Abhinay'}
// {name: 'yoa', password: 'Abhinay'}


// var a = [1,2,3]
// var b = a;

// b.push(4)


// console.log(a)
// console.log(b)
// (4) [1, 2, 3, 4]
// (4) [1, 2, 3, 4]



// solution for array

// var a = [1,2,3]
// var b = [].concat(a);

// b.push(4)


// console.log(a)
// console.log(b)
// (3) [1, 2, 3]
// (4) [1, 2, 3, 4]


// solution for object


// let obj ={
//     a:'a',
//     b:'b',
//     c:'c'
// }

// let clone = Object.assign({},obj)
// let clone2 = {...obj}
// obj.c = 5;

// console.log(obj)
// console.log(clone)
// console.log(clone2)

// {a: 'a', b: 'b', c: 5}
// {a: 'a', b: 'b', c: 'c'}
// {a: 'a', b: 'b', c: 'c'}


// Shallow cloning

// let obj ={
//     a:'a',
//     b:'b',
//     c:{
//         deep:'try and copy me'
//     }
// }

// let clone = Object.assign({},obj)
// let clone2 = {...obj}
// let superclone = JSON.parse(JSON.stringify(obj));

// obj.c.deep = 5;

// console.log(obj)
// console.log(clone)
// console.log(clone2)
// console.log(superclone)

// type coercion

// 1 == '1'
// true
// 1 === '1'
// false
// 1 !== '1'
// true
// if(1) {
//     console.log(5)
// }

// 5
// if(0) {
// console.log(5)
//             }
// undefined

// -0 === +0
// true
// Object.is(-0,+0)
// false
// NaN == NaN
// false
// Object.is(NaN,NaN)
// true

// false == ""  
// true
// false == []  

// true
// false == {} 
// false
// "" == 0  
// true
// "" == []   
// true
// "" == {}   
// false
// 0 == [] 
// true
// 0 == {}    
// false
// 0 == null  
// false


// Invoking a function

// 1st way

// function one(){
//     return 1
// }
// one()

// 2nd way
// const obj = {
//     two() {
//         return 2
//     }
// }
// obj.two();

// 3rd way

// function three() {
//     return 3
// }

// three.call()

// 4th way

// const four = new Function('return 4')
// const four = new Function('num', 'return num')
// four(5)

// function woo(){
//     console.log('wooooo')
// }

// woo.yell = 'ahhhhh'

// woo()

// const obj = {

// }


// Function are first citizen in Javascript

// 1 - function can be assign to variable or object property


// var stuff = function () {

// }

// 2 - we can also pass function as arguments

// function a(fn){
//     fn()
// }
// a(function() {console.log('hi there')})


// 3 - we can return function as value in another function 

// function b() {
//     return function c() {
//         console.log('bye')
//     }
// }


// var d = b();
// d()

// Function

// dont use this

// for(let i = 0; i<5; i++){
//     function a() {

//     }
//     a ()
// }

// instead use

// function a() {
//     for(let i = 0; i<5; i++){
   
//         a ()
// }
// }

// dont use this 
// function a(param){
//     return param
// }

// a()

// instead use
// function a(param=6){
//     return param
// }

// a()


// Higher order function -  higher order functions are simply a function that can take a function as an argument or a function that returns another function.



// function() - simple function

// function letAdamLogin() {
//    let  arr = []
//    for(let i = 0; i < 10000000; i++){
//        arr.push(i)
//    }
//    return 'Access Granted to adam'
// }

// function letEvaLogin() {
//     let  arr = []
//     for(let i = 0; i < 100000000; i++){
//         arr.push(i)
//     }
//     return 'Access Granted to adam'
//  }

//  letAdamLogin()
//  letEvaLogin()




// function(a,b) - function to accept parameter

// const giveAccess (name) => 
//     "Access granted to", + name

// function letUserLogin(user){ // now we tell  what data to use.
//     let array = []
//     for(let i =0; i< 100000000; i++){
//         array.push(i)
//     }
//     return letUserLogin(user)
// }

// letUserLogin('Abhinay')

// function letAdminLogin(admin){ // now we tell  what data to use.
//     let array = []
//     for(let i =0; i< 500000000; i++){
//         array.push(i)
//     }
//     return letAdminLogin (admin)
// }


// Higher order function - we actually call the function.That is, we can give it the data and also tell the function what to do or some extra abilities when we actually invoke it.




// const giveAccess = (name) => 
//     "Access granted to " + name;

//     function auth(verify) {
//         let array = []
//         for(let i =0; i< verify; i++){
//             array.push(i)
//         }
//         return giveAccess(person.name)
//     }
//    function sing(person) {
//        return 'la lal la my name is ' + person.name;
//    }
//     function letPersonLogin(person, fn) {
//         if(person.level === 'admin'){
//             return fn(person)
//         } else if (person.level === 'user'){
//             return fn(person)
//         }
//     }

//     letPersonLogin({level: 'admin', name: 'sally'},sing)
  

// Exercise
// by using function expression
// const multiplby = function(num1){
//     return function(num2){
//         return num1 * num2
//     }
// }

// const multiplyby2 = multiplby(2)
// const multiplyby5 = multiplby(5)

// multiplyby2(4)
// 8
// multiplyby5(10)
// 50

// By using arrow function

// const multipleBy = (a) => (b) => (c) =>  a*b*c;

// const mul2 = multipleBy(2)

// mul2(4,3)

// mul2(4)(3)
// 24
// mul2(3)(7)
// 42

// clousure

// clousure = function() + lexical scope
//  closure is simply that a combination of function and the lexical environment from which it was declared closures allow a function to access variables from an enclosing scope or environment, even after it leaves the scope in which it was declared.
// clousure is also called lexical scope

// Example 1

// function a() {
//     let grandpa = 'grandPa'
//     console.log(grandpa)
//     return function b() {
//         let father = 'father'
//         return function c() {
//             let son = 'son';
//             return `${grandpa} > ${father} > ${son}`
//         }
//     }
// }

// a()()()
// 'grandPa > father > son'


// example 2

// with function declaration

// function Boolean(string) {
// return function(name){
//     return function(name2) {
//         console.log(`${string} ${name} ${name2}`)
//     }
// }
// }

// with arrow function

// const Bool = (string) => (name1) => (name2) => 
// console.log(`${string} ${name1} ${name2}`)

// Bool('ABhinay')('Yadav')('super')



// exercise

// function CallMeMaybe() {
//     const callMe = 'Hi! I am now here!'
//     setTimeout(() => {
//         console.log(callMe)
//     },5000)
// }

// The two main benifits of closure are memory efficient and encapsulation

// Memory Efficient

// function heavyDuty(index) {
//     const bigArray = new Array(7000).fill('0')
//     console.log('created!')
//     return bigArray[index]
// }

// heavyDuty(688)
// heavyDuty(688)
// heavyDuty(688)


// function heavyDuty2() {
//     const bigArray = new Array(7000).fill('0')
//     console.log('created Again!')

//     return function(index){
//         return bigArray[index]
//     }

// }
// const getHeavyDuty = heavyDuty2()
// getHeavyDuty(688)
// getHeavyDuty(800)
// getHeavyDuty(700)


// Encapsulation

// const makeNuclearButton = () => {
//     let timeWithoutDestruction = 0;
//     const pasTime = () => 
//     timeWithoutDestruction++;
//    const totalPeaceTime =() => timeWithoutDestruction;
//     const launch = () => {
//         timeWithoutDestruction = -1
//     return 'Boom';
//     }
//     setInterval(pasTime, 1000);
//     return {
//         launch:launch,
//         totalPeaceTime: totalPeaceTime
//     }
// }

// const oHno = makeNuclearButton()


// const makeNuclearButton = () => {
//         let timeWithoutDestruction = 0;
//         const pasTime = () => 
//         timeWithoutDestruction++;
//        const totalPeaceTime =() => timeWithoutDestruction;
//         const launch = () => {
//             timeWithoutDestruction = -1
//         return 'Boom';
//         }
//         setInterval(pasTime, 1000);
//         return {
//             totalPeaceTime: totalPeaceTime
//         }
//     }
    
//     const oHno = makeNuclearButton()
    
    // Exercise

    // let view;

    // function initialize() {
    //     view = "Mountain"
    //     console.log('veiw has been set')
    // }
    // initialize()
    // initialize()
    // initialize()
    // console.log(view)
    
    // solution



//     let view;

//     function initialize() {
//         let called = 0;
//         return function(){
//             if(called > 0){
//                 return;
//             } else{
//                 view = "Mountain"
//                 called++;
//                 console.log('veiw has been set')

//             }
//         }
        
//     }
//     const startOnce = initialize();
//    startOnce()
//    startOnce()
//    startOnce()
//    console.log(view)


// exercise

// const array = [1,2,3,4];

// for(var i = 0; i< array.length; i++){
//     setTimeout(() => {
//         console.log('Im at index ' + i)
//     }, 3000);
// }


// on two way we can solve this

// 1st solution

// const array = [1,2,3,4];

// for(let i = 0; i< array.length; i++){
//     setTimeout(() => {
//         console.log('Im at index ' + i)
//     }, 3000);
// }

// 2nd Solution

// const array = [1,2,3,4];

// for(var i = 0; i< array.length; i++){
//    (function(clousureI) {
//     setTimeout(() => {
//         console.log('Im at index ' + array[clousureI])
//     }, 3000);

//    })(i) 
// }


// prototypes

// prototypial Inheritance

// with Array 

// const array = []
// undefined
// array.__proto__
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}[[Prototype]]: Object
// array.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// array.toString()
// ''

// With Fucntion

// function a() {
// }
// undefined
// a().__proto__

// a.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// Object

// const obj1 = {}
// obj1.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// obj1.__proto__.__proto__
// null

// Borrowing by using bind method

// let dragon = {
//     name: 'Taniya',
//     fire: true,
//     fight() {
//         return 5
//     },
//     sing() {
//         return `I am ${this.name}, the breather of fire`
//     }
// }

// dragon.sing()
// 'I am Taniya, the breather of fire'
// dragon.fight()
// 5

// let lizard = {
//     name: 'Abhinay',
//     fight() {
//         return 1;
//     }
// }

// const singLizard = dragon.sing.bind(lizard)

// singLizard()
// 'I am Abhinay, the breather of fire'


// By using Prototypal Inheritance

// let dragon = {
//     name: 'Taniya',
//     fire: true,
//     fight() {
//         return 5
//     },
//     sing() {
//         if(this.fire){

//             return `I am ${this.name}, the breather of fire`
//         }
       
//     }
// }





// let lizard = {
//     name: 'Abhinay',
//     fight() {
//         return 1;
//     }
// }

// lizard.__proto__ = dragon

// lizard.sing()
// 'I am Abhinay, the breather of fire'
// lizard.fight()
// 1
// lizard.fire
// true

// dragon.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// dragon.__proto__.__proto__
// null
// dragon.isPrototypeOf(lizard)
// true



// lizard.isPrototypeOf(dragon)
// false


// lizard.__proto__ = dragon

// for(let prop in lizard){
//     if(lizard.hasOwnProperty(prop)){
//     console.log(prop)
// }
// }


// dont use upper way it bad for performance



// bit more about protype

// const obj = { name: 'Sally'}
// undefined
// obj.hasOwnProperty('Sally')
// false

// prototype with function
// function a() {}
// undefined
// a.hasOwnProperty('name')
// true
// a.hasOwnProperty('call')
// false
// a.hasOwnProperty('apply')
// false


// function multiplyby5(num){
//     return num * 5;
//     }
//     undefined
//     multiplyby5.__proto__
//     ƒ () { [native code] }
//     multiplyby5.__proto__.__proto__
//     {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//     multiplyby5.__proto__.__proto__.__proto__
//     null


// function multiplyby5(num){
//     return num * 5;
//     }
//     undefined
//     multiplyby5.__proto__
//     ƒ () { [native code] }
//     Object.prototype
//     {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
//     Object.prototype.__proto__
//     null

// Array with prototypes

// const arr = [];
// undefined
// arr.hasOwnProperty('map')
// false
// arr.__proto__.hasOwnProperty('map')
// true
// arr.prototype
// undefined
// Array.prototype
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}[[Prototype]]: Object
// arr.__proto__
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]


// Two review arrays and functions are objects in JavaScript.Multiplied by five is a special type of object that is a colorful object that instead of having called in, apply and bind directly as its properties, use this prototype of inheritance to actually inherit from the base function.And the key here is that Proteau points to the prototype up the chain.And keep in mind that this Proteau property actually lives on the prototype.
// Object.create is use to create prototypes

// let human = {
//     mortal: true
// }
// let socrates = Object.create(human)
// socrates.age = 45;
// console.log(socrates)
// console.log(human.isPrototypeOf(socrates))
// // {age: 45}
// index.js:3047 true

// only function Have protoype property

// function multiplyby5(num){
//     return num * 5;
//     }
//     undefined
//     multiplyby5.prototype
//     {constructor: ƒ}constructor: ƒ multiplyby5(num)arguments: nullcaller: nulllength: 1name: "multiplyby5"prototype: {constructor: ƒ}[[FunctionLocation]]: VM23266:1[[Prototype]]: ƒ ()[[Scopes]]: Scopes[1][[Prototype]]: Object
//     multiplyby5.prototype.__proto__
//     {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//     multiplyby5.__proto__
//     ƒ () { [native code] }
//     multiplyby5.__proto__.__proto__
//     {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//     Object.prototype
//     {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//     typeof Object
//     'function'

// const obj = {}
// undefined
// typeof obj
// 'object'
// typeof Object
// 'function'
// typeof Object.prototype
// 'object'


// const obj = {}
// undefined
// obj.prototype
// undefined
// const arr = []
// undefined
// arr.prototype
// undefined
// 'string'.prototype
// undefined
// function b() {
// }
// undefined
// b.prototype
// {constructor: ƒ
// String.prototype
// String {'', constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}



//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

// new Date('1900-10-10').lastYear()
//'1899'


//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
// console.log([1,2,3].map())
//1🗺, 2🗺, 3🗺

// Solution - 1

// Date.prototype.lastYear =  function() {
//     return this.getFullYear() - 1
// }

// new Date('1900-10-10').lastYear()

// new Date('1900-10-10').lastYear()
// 1899
// new Date().lastYear()
// 2020
// new Date('1988-10-10').lastYear()
// 1987
 // Arrow function will not work with this beacuse of dynamic scoping of this keyword

 // solution 2

// Array.prototype.map = function() {
//     let arr = []
//     for(let i =0; i < this.length; i++){
//         arr.push(this[i] + '🗺')
//     }
//     return arr
// }
// console.log([1,2,3].map())
// ['1🗺', '2🗺', '3🗺']


// Exercise

// How would you be able to create your own .bind() method using call or apply.

// Hint:

// Function.prototype.bind = function(){
// }




// solution

// Function.prototype.bind = function(whoIsCallingMe){
//     const self = this;
//     return function(){
//       return self.apply(whoIsCallingMe, arguments);
//     };
//   }

// OOPs(object oriented programming)

//  const elf = {
//      name: 'Orwell',
//      weapon: 'bow',
//      attack() {
//          return `attack with ${elf.weapon}`
//      }
//  }

// factory function

// function createElf(name, weapon){
//     return {
//         name: name,
//         weapon: weapon,
//         attack() {
//             return `attack with ${weapon}`
//         }
//     }
// }

// const peter = createElf('peter', 'stone')

// peter.attack()

// const sam = createElf('sam', 'fire')

// sam.attack()


// factory function  - 2 way

// const elfFunc = {
//     attack () {
//         return `attack with ${this.weapon}`
//     }
// }
// function createElf(name, weapon){
//     return {
//         name: name,
//         weapon: weapon,
        
//     }
// }

// const peter = createElf('peter', 'stone')
// peter.attack = elfFunc.attack
// peter.attack()

// const sam = createElf('sam', 'fire')
// sam.attack = elfFunc.attack
// sam.attack()

// Object.create

// const elfFunc = {
//         attack () {
//             return `attack with ${this.weapon}`
//         }
//     }


// function createElf(name, weapon){
//     let newElf = Object.create(elfFunc)
//     console.log(newElf)
//     newElf.name = name;
//     newElf.weapon = weapon;
//     return newElf;
// }

// const peter = createElf('peter', 'stone')

// console.log(peter.attack())

// const sam = createElf('sam', 'fire')

// console.log(sam.attack())



// before object.create ---- constructor function

// Constructor  function

// ex 1

// function Elf(name, weapon){
   
//     this.name = name;
//     this.weapon = weapon;
//     console.log('this', this)
// }
// Elf.prototype.attack = function() {
//     return `atack with ${this.weapon}`
// }
// const peter = new Elf('peter', 'stones')
// console.log(peter.attack())

// const sam = new Elf('sam', 'fire')
// console.log(sam.attack())

// ex- 2

// function Elf(name, weapon){
   
//     this.name = name;
//     this.weapon = weapon;
//     console.log('this', this)
// }
// Elf.prototype.attack = function() {
//     return `atack with ${this.weapon}`
// }

// Elf.prototype.build = function() {

//     function building() {
//         return `${this.name} build a house`
//     }
//    return  building.bind(this)
    
// }
// const peter = new Elf('peter', 'stones')
// console.log(peter.build()())

// const sam = new Elf('sam', 'fire')
// console.log(sam.attack())


// Adding class and doing OPPs programming


// CF

// var a = new Number(5)
// console.log(a)
// typeof a

// var b = 5;
// console.log(b)
// typeofb
// console.log(a===b)

// class in ES6

// class Elf{
//     construtor(name, weapon){
//         this.name = name;
//         this.weapon = weapon;
//         console.log('this', this)
//     }
//     attack() {
//         return `atack with ${this.weapon}`
//     }
    
//     }
    
//     const peter = new Elf('peter', 'stones')
//     console.log(peter.build()())
    
//     const sam = new Elf('sam', 'fire')
//     console.log(sam.attack())

// this keyword
// new binding this

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// const person1 = new Person('Xaxiver', 55)

// implicit binding

// const person = {
//     name: 'karen',
//     age: 55,
//     hi() {
//         console.log('hi' + this.name)
//     }
// }

// Explicit binding

// const person3 = {
//     name: 'karen',
//     age: 55,
//     hi: function() {
//         console.log('hi' + this.setTimeout)
//     }.bind(window)
// }
// person3.hi()


// arrow function

// const person4 = {
//     name: 'karen',
//     age: 55,
//     hi: function() {
//         var inner = () => {
//             console.log('hi ' + this.name)
//         }
//          return inner()
//     }
// }

// person4.hi()


// Inheritance

// class Character {
//     constructor(name, weapon) {
//       this.name = name;
//       this.weapon = weapon;
//     }
//     attack() {
//       return 'atack with ' + this.weapon
//     }
//   }
  
//   class Elf extends Character { 
//     constructor(name, weapon, type) {
//       // console.log('what am i?', this); this gives an error
//       super(name, weapon) 
//       console.log('what am i?', this);
//       this.type = type;
//     }
//   }
  
//   class Ogre extends Character {
//     constructor(name, weapon, color) {
//       super(name, weapon);
//       this.color = color;
//     }
//     makeFort() { // this is like extending our prototype.
//       return 'strongest fort in the world made'
//     }
//   }
  
//   const houseElf = new Elf('Dolby', 'cloth', 'house')
// //houseElf.makeFort() // error
// const shrek = new Ogre('Shrek', 'club', 'green')
// shrek.makeFort()


// Example - 2

// class Character {
//     constructor(name, weapon) {
//       this.name = name;
//       this.weapon = weapon;
//     }
//     attack() {
//       return 'atack with ' + this.weapon
//     }
//   }
  
//   class Elf extends Character { 
//     constructor(name, weapon, type) {
//       // console.log('what am i?', this); this gives an error
//       super(name, weapon) 
//       console.log('what am i?', this);
//       this.type = type;
//     }
//   }
  
//   class Ogre extends Character {
//     constructor(name, weapon, color) {
//       super(name, weapon);
//       this.color = color;
//     }
//     makeFort() { // this is like extending our prototype.
//       return 'strongest fort in the world made'
//     }
//   }
  
//   const houseElf = new Elf('Dolby', 'cloth', 'house')
//   //houseElf.makeFort() // error
//   const shrek = new Ogre('Shrek', 'club', 'green')
//   shrek.makeFort()
  


// Functional programming


// Amazon Shopping

const user = {
    name: 'kim',
    active: true,
    cart: [],
    purchase: []
}

// Implement a cart features:

// 1. Add items to cart.
// 2. Add 3% tax to items in cart
// 3. Buy items: cart --> purchase
// 4. Empty cart

// Bonus:

// Accept refunds.
// track user history.



// procedural to FP

// no  side effect
// don't do this

// const arr = [1,2,3]

// function a(array) {
//     array.pop()

// }
// function b(array) {
//     array.push(1)

// }
// a(arr)
// b(arr)
// console.log(arr)

// solution 


// const arr = [1,2,3]

// function removelast(array) {
//     const newArr = [].concat(array)
//     newArr.pop()
//      return newArr
// }
// function AddItem(array) {
//     const newArr = [].concat(array)
//     newArr.push(5)
//      return newArr

// }

// function multiplyBy2(array){
//     return array.map(item => item *2)
// }
// console.log(removelast(arr))
// console.log(AddItem(arr))
// console.log(multiplyBy2(arr))
// console.log(arr)

// input --> output
// refrencial transprency

// function a(num1, num2){
//     return num1 + num2
// }

// console.log(a(3,4))

// function b(num){
//     return num * 2
// }

// console.log(b(a(3,4)))





































