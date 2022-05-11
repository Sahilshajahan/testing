import './App.css';
import React, { useEffect, useState } from "react";
import Bmilist from './components/Bmilist';
import Bmi from './components/bmiscore';
import Form from './components/form';


function App() {
  const [bmi, setbmi]= useState(18)
  const [bmiType, setbmiType]= useState("overweight")
    //let bmi = 18;
   /*  const changeBmi = () => {
      bmi = 19;
      setbmi(bmi +10)
      console.log(bmi);
    } */
    return ( 
    <>
    <div>BMI calculator</div>
    <button onClick={()=>setbmi(bmi+10)}>click</button>
    <Form/>
    <Bmi  bmiNo={bmi} bmiName={bmiType}/>
    <Bmilist/>
    </>
  
  );
}

export default App;
