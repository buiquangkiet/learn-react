import { useState } from "react";
import './App.css'



function App() {
  const [numberTop, setNumberTop] = useState(0);
  const [numberBottom, setNumberBottom] = useState(0);
  const [value, setVlaue] = useState("");

  function gcd(numberTop, numberBottom) {
    // Function to find the greatest common divisor
    while (numberBottom) {
        [numberTop, numberBottom] = [numberBottom, numberTop % numberBottom];
    }
    return numberTop;
}

function reduceFraction(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero!");
    }

    if (numerator === 0) {
        // If numerator is zero, return 0
        return [0, 1];
    }

    // Find the greatest common divisor
    const commonDivisor = gcd(numerator, denominator);

    // Reduce the fraction
    const reducedNumerator = numerator / commonDivisor;
    const reducedDenominator = denominator / commonDivisor;

    return [reducedNumerator, reducedDenominator];
}

   const handle = () =>{
     let [reducedNumerator, reducedDenominator] = reduceFraction(numberTop, numberBottom)
     setVlaue(reducedNumerator + " / " + reducedDenominator)
   }

  
  
  return (
    <div className="App">
       <input type="number" value={numberTop} onChange={(e) => setNumberTop(e.target.value)} />
      <input type="number" value={numberBottom} onChange={(e) => setNumberBottom(e.target.value)} />
      <h3>{value}</h3>

      <button onClick={handle}>Reduce</button>
      
      
      
    </div>
  );
 
  }

  

export default App;
