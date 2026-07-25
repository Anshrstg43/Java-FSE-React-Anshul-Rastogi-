import React from 'react';

function App() {
  const element = "Office Space";
  
  const sr = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80";
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" style={{ margin: "20px 0" }}/>;

  const officeSpaceItems = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" }
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      
      {/* Displaying the heading element using JSX */}
      <h1>{element} , at Affordable Range</h1>
      
      {/* Rendering the image attribute */}
      {jsxatt}
      
      {/* Looping through the office space item array */}
      {officeSpaceItems.map((ItemName, index) => {
        
        let colors = [];
        if (ItemName.Rent <= 60000) {
            colors.push('red');
        } else {
            colors.push('green');
        }

        return (
          <div key={index}>
            <h2>Name: {ItemName.Name}</h2>
            
            {/* Applying the conditional color from our colors array */}
            <h3 style={{ color: colors[0] }}>Rent: Rs. {ItemName.Rent}</h3>
            
            <h3>Address: {ItemName.Address}</h3>
          </div>
        );
      })}

    </div>
  );
}

export default App;