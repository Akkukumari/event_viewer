import React, { useState } from 'react';
import "./All.css";
function Dropdown() {
  const [selectedOption, setSelectedOption] = useState(''); // State to store the selected option
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']; // Example options

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
    <div className='input'>
      <select  className='option' id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option   value=""> Price</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      </div>

      <div className='inputinside' >
      <select className='option' id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Time</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      </div>

      
     
      </>
  );
}

export default Dropdown;
