import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      id: "INTADMDF10", name: ".NET FSD", startDate: "22-Feb-2022", 
      status: "Scheduled", coach: "Aashma", trainer: "Jojo Jose"
    },
    {
      id: "ADMJ21JF014", name: "Java FSD", startDate: "10-Sep-2021", 
      status: "Ongoing", coach: "Apoorv", trainer: "Elsa Smith"
    },
    {
      id: "CDBJF21025", name: "Java FSD", startDate: "20-Dec-2021", 
      status: "Ongoing", coach: "Aashma", trainer: "John Doe"
    }
  ];

  return (
    <div style={{ margin: '20px' }}>
      <h2>Cohorts Details</h2>
      <hr />
      {/* Loop through the data and create a card for each */}
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;