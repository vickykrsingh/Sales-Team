import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeadListing = () => {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredLeads, setFilteredLeads] = useState([]);

  useEffect(() => {
    // Dummy data
    const dummyLeads = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'New' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Contacted' },
      { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', status: 'Not Interested' },
      { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', status: 'New' }
    ];
    setLeads(dummyLeads);
    setFilteredLeads(dummyLeads);
  }, []);

  useEffect(() => {
    // Filter leads based on search input
    setFilteredLeads(
      leads.filter(lead =>
        lead.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, leads]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lead Listing</h1>
      <input
        type="text"
        placeholder="Search leads..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeads.map(lead => (
            <tr key={lead.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{lead.id}</td>
              <td className="py-2 px-4 border-b">{lead.name}</td>
              <td className="py-2 px-4 border-b">{lead.email}</td>
              <td className="py-2 px-4 border-b">{lead.status}</td>
              <td className="py-2 px-4 border-b">
                <Link to={`/lead-details/${lead.id}`} className="text-blue-500 hover:underline">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadListing;
