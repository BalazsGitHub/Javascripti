console.log("I am in crazy")

function out(any){console.log(any)}
function sum(x, y){return x +y}


//you dont need semicolon if one statement in one line
const a = 5 ;
console.log(a);
//You can't change const value
///a = 6;
let b = 6;
console.log(b);
b = "Hello";
console.log(b);

out(sum(5, 6))
out(sum(5, "Hello"))
out(sum(4>3, "Hello"))
out(sum(4<3, "Hello"))
out(sum(5.5, "Hello"))

const c = 0/0;
out(sum(c, "hellox"));
let d = c + 5;
let e = null;
out(e);
let f;

out(f);
out(f, c);



