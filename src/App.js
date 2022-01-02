import './App.css';
import { useState } from 'react';


const App = () => {
//const [hcfValue, setHcfValue] = useState('');
//const [result1, setResult1] = useState('');
const [nesData, setNesData] = useState('');
const [parensData, setParensData] = useState('');

const parensValue = () => {
  var parens = document.getElementById("parens").value;
  const balancedPar = function(pars) {
    const stack = [];
    for( let single of pars) {
      if(single === '(')
      {
        stack.push(single);
      }
      if(single === ')')
      {
        if(stack.length === 0)
        {
          return false;
        }
        stack.pop();
      }
    }
    return stack.length === 0;
  }
  var newVal = document.write(balancedPar(parens));
  setParensData(newVal);
}

const getValue = () => {
 var val = document.getElementById("decval").value;
 var result = document.getElementById("result");
 result.innerHTML="";

 while(val >= 1){
   result.innerHTML = Math.floor(val % 2) + result.innerHTML;
   val = val / 2;
 }
}
  //var result1 = document.getElementById("result1");
  //result1.innerHTML="";

const calculateValue = () => {
  var a = document.getElementById("testvariable1").value;
  var b = document.getElementById("testvariable2").value;
  
  for(var i=1; i<=a && i<=b; i++)
  {
    if(a%i === 0 && b%i === 0)
    {
      var result1=i;
      setNesData(result1);
    }
  }
}
  return (
    <div>
      <div>
        <p>Q1.Implement a function that takes an array testVariable containing opening ( and closing parenthesis ) and determines whether or not<br></br> the brackets in the array are balanced. The function also takes startIndex = 0 and currentIndex = 0 as parameters.</p>
        <p>Answer..</p>
        <label>Enter parentheses:</label>
        <input placeholder="Ex: ()()()" type="text" id="parens" ></input>
        <button onClick={parensValue}>Check</button>
        <label>{parensData}</label>
      </div>
      <hr></hr>
      <div>
      <p>Q2.Write a function that takes a number testVariable and returns a string that is its equivalent binary number.</p>
      <p>Answer..</p>
      <label>Enter Any Decimal Number:</label>
        <input placeholder="Ex: 11" type="text" id="decval" ></input>
        <button onClick={getValue} id="btn" >Convert</button>
        <br></br>
        <label>Output:</label>
        <label id="result"></label>
      </div>
      <hr></hr>
      <div>
        <p>Q3.Implement a function that takes two numbers, testVariable1 and testVariable2 and returns their greatest common divisor.</p>
        <p>Answer..</p>
        <label>Enter First Number:</label>
        <input type="text" placeholder="Ex: 56" id="testvariable1"></input>
        <br></br>
        <label>Enter Second Number:</label>
        <input type="text" placeholder="Ex: 34" id="testvariable2"></input>
        <button onClick={calculateValue} id="calculate">Calculate</button>
        <br></br>
        <label>Output:</label>
        <label >{nesData}</label>
      </div>
      <hr></hr>
    </div>
  );
};

export default App;
