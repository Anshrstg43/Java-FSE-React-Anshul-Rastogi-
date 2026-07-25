import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    const convertedAmount = amount * 80; 
    alert(`Converting to ${currency} amount is ${convertedAmount}`);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '80px' }}>Amount: </label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '80px' }}>Currency: </label>
          <input 
            type="text" 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)} 
          />
        </div>
        <button type="submit" style={{ marginLeft: '80px' }}>Submit</button>
      </form>
    </div>
  );
};


function App() {
  const [count, setCount] = useState(5);

  const handleIncrement = () => {
    setCount(count + 1);
    alert("Hello Member1");
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleWelcome = (message) => {
    alert(message);
  };

  const handleSyntheticEvent = (e) => {
    alert("I was clicked");
  };

  return (
    <div style={{ margin: '20px' }}>
      <p>{count}</p>
      
      {/* Buttons container */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '120px', gap: '5px' }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => handleWelcome("welcome")}>Say welcome</button>
        <button onClick={handleSyntheticEvent}>Click on me</button>
      </div>

      <CurrencyConvertor />
    </div>
  );
}

export default App;