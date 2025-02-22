import React from 'react'
import './BMICalculator.css'

const BMICalculator = () => {
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
    </div>
  )
}

export default BMICalculator