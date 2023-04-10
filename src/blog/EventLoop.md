# What Is the Event Loop?

JavaScript is an asynchronous single-threaded language—it is one call stack and it can only do one thing at a time. This call stack is present in the JavaScript engine and all the code of the JavaScript is executed in the call stack.

<code language="javascript">

function b() {
  console.log("b");
}

b();
console.log("end");

</code>

Whenever any JavaScript program is executed, a global execution context is created; it is then moved to the call stack. Looking at the code above, in order for JavaScript to run the code, it first creates the global execution context in the call stack, then the function “b” is allocated memory and moved to the call stack for execution, which then prints “b” to the console.

Once the function is executed, it’s moved out of the call stack, and the following code begins execution. That is how the JavaScript engine runs its program.

<code language="javascript">

console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");

</code>

In the scenario of having a timeout or delay executing code, the global execution context is first created and pushed inside the call stack. The whole code block will run line by line, starting by printing Start to the console, which is executed inside the global execution context. It moves to the setTimeout function, which registers a callback and also starts a timer of 5000 ms and moves to the following line without waiting; this line prints End to the console, then the global execution context pops off the call stack since we are done executing the code. While all these things are happening, the timer is still running.

As soon as the timer is done counting, the callback function needs to be executed, which means it has to find a way to move the callback inside the call stack to execute the function; this is where the event loop and callback queue come into play. Because the callback function cannot go directly into the call stack, it has to pass through the callback queue. After the timer expires, the callback function is moved into the callback queue, and the event loop helps put the callback functions from the callback queue into the call stack.

The event loop serves as a gatekeeper that checks for a pending function in the callback queue. If yes, it is pushed inside the call stack.

Let’s go through one more code example before we continue.

<code language="javascript">

console.log("start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

fetch("https://api.netflix.com")
.then(function cbNet() {
  console.log("let have fun with Netflix")
});

console.log("End")

</code>

So in the scenario above, we have a setTimeout function, waiting for the time before it executes the function, and then the fetch function, waiting for data to be fetched from the given endpoint.

Like the previous examples, it starts the code execution by executing the first line of code in the call stack, which will print Start to the console. It moves it out of the call stack and moves to the timeout function, stored as a callback until the timeout expires. It immediately moves to the following line, stored as a callback until the data is fetched from the endpoint. Lastly, it moves to the last line of the code, which prints End to the console; once the timeout expires or the data is received from the endpoint, the callback is moved to the callback queue, which is then moved sequentially by the event loop to the call stack for execution.

## Understanding Sync and Async Programming

Synchronous programming is a type of programming where code is executed from the top of the file to the bottom of the file without skipping any line.

Asynchronous programming, on the other hand, round-executes the code from top to bottom but will run into certain asynchronous functions or code which will need to split up and be separately executed because it needs to wait or do some operations before the function can be executed—which often takes some time.

<code language="javascript">

let a = 1;
let b = 2;

console.log(a);
console.log(b); 

</code>

In the code above, the output will be one coming first and two coming second. This is a synchronous code that runs without delay.

<code language="javascript">

let a = 1;
let b = 2;
console.log(a);

setTimeout(function cs(){
  console.log("asyncronous");
}, 100)

console.log(b);

</code>

In the code above, the timeout function needs a delay of 100 ms, leading to the code execution waiting until the timeout expires. The output will be 1, 2, “asynchronous” because the timeout will be delayed, giving the other function time to execute.

## The Event Loop in Node.js

Node.js is single-threaded, and the event loop runs on a single thread called the main thread, but there is a bit of difference with Node.js.

Let’s look at examples:

<code language="javascript">

// Synchronous version
const crypto = require('crypto');

const Num = 3;

for (let i = 0; i < Num; i++) {
  crypto.pbkdf2Sync("secrect_key", "water", 1000, 512, 'sha512');
}

</code>

<code language="javascript">

// Asynchronous version
const crypto = require('crypto');

const Num = 3;

for (let i = 0; i < Num; i++) {
  crypto.pbkdf2("secrect_key", "water", 1000, 512, 'sha512', ()=>{});
}

</code>

Looking into the crypto module, let’s check out the pbkd (Password-Based Key Derivation) function. This can run in both sync and async; running this code synchronously with the number of requests set to 3 will make the code run three times waiting for one to complete before running the other.

That takes more time to complete the execution, while running the code in async will run the three in parallel, reducing the execution time.

Node does not spin up a new thread for each request. Instead, it uses a pre-allocated number of threads called the thread pool; the default is four which will be reused for all the work, so once the request starts, it will be assigning them to the threads on the thread pool. Hence, once all the threads in the thread pool are busy, it puts the request in a queue until one of the working threads is free for assigning.