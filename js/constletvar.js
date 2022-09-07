function out(any){console.log(any)}
out('I am in constletvar');
const a = 5;
let b = "hej";
var c = null;

function testScope(){
  let x = "x hello"
  var z = "hello"
  if(x>z){
    out("inside scope2")
    let a = 4;
    var b = 5;
    if(b>a){
      let a1 = 10;
      var b1 = 11; //even var can not be reached from outside
    }
  }
}
testScope();
out(a);
//out(b1);
out(z);
