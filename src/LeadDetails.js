import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const LeadDetails = () => {
  const { id } = useParams();
  const [lead, setLead] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    // Dummy data
    const dummyLeads = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'New', notes: 'Interested in SUVs.' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Contacted', notes: 'Prefers electric cars.' },
      { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', status: 'Not Interested', notes: 'Not looking to buy now.' },
      { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', status: 'New', notes: 'Looking for a family sedan.' }
    ];
    const selectedLead = dummyLeads.find(lead => lead.id === parseInt(id));
    setLead(selectedLead);
  }, [id]);

  const handleUpdate = () => {
    // Implement lead update logic here
    // For now, just navigate back to the lead listing
    history.push('/lead-listing');
  };

  if (!lead) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lead Details</h1>
      <div className="mb-4">
        <span className="font-semibold">ID:</span> {lead.id}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Name:</span> {lead.name}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Email:</span> {lead.email}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Status:</span> {lead.status}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Notes:</span> {lead.notes}
      </div>
      <button
        onClick={handleUpdate}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Update Lead
      </button>
    </div>
  );
};

export default LeadDetails;
