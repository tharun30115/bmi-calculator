import React, { useState } from 'react'
import './BMICalculator.css'

const BMICalculator = () => {

    const [height,setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [bmi] = useState(null)

  return (
    <div className='bmi-card'>
        <h2>BMI Calculator</h2>
        <div className='input-group'>
            <label>Weight (Kg)</label>
            <input type="number"
            value={weight} 
            onChange={(e) => setWeight(e.target.value)}
            placeholder='Enter your weight'
            />
        </div>

        <div className='input-group'>
            <label>Height (cm)</label>
            <input type="number"
            value={height} 
            onChange={(e) => setHeight(e.target.value)}
            placeholder='Enter your height'
            />
        </div>
        <button className='btn-calculator' onClick={calculateBMI}>Calculate BMI</button>
        {
            bmi && (
                <div className='result'>
                    <h3>Your BMI: {bmi}</h3>
                    <h4>Category: {category}</h4>
                </div>
            )
        }
    </div>
  )
}

export default BMICalculator