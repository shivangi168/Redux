import React, { useState } from 'react';

const CityStateManager = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [newState, setNewState] = useState('');
  const [newCity, setNewCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [error, setError] = useState('');

  const [searchCity, setSearchCity] = useState('');
  const [searchState, setSearchState] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Handle Add State
  const handleAddState = () => {
    if (!newState.trim()) {
      setError('State name cannot be empty.');
      return;
    }
    if (states.includes(newState.trim())) {
      setError('State already exists.');
      return;
    }
    setStates([...states, newState.trim()]);
    setNewState('');
    setError('');
  };

  // Handle Add City
  const handleAddCity = () => {
    if (!selectedState || !newCity.trim()) {
      setError('Both state and city are required.');
      return;
    }
    const isDuplicate = cities.some(
      (c) => c.name.toLowerCase() === newCity.trim().toLowerCase() && c.state === selectedState
    );
    if (isDuplicate) {
      setError('City already exists in this state.');
      return;
    }
    setCities([...cities, { name: newCity.trim(), state: selectedState }]);
    setNewCity('');
    setSelectedState('');
    setError('');
  };

  // Handle Delete
  const handleDeleteCity = (cityToDelete) => {
    const filtered = cities.filter((city) => city !== cityToDelete);
    setCities(filtered);
  };

  // Handle Edit
  const handleEditCity = (cityToEdit) => {
    const newName = prompt('Enter new city name:', cityToEdit.name);
    if (newName && newName.trim()) {
      const isDuplicate = cities.some(
        (c) =>
          c.name.toLowerCase() === newName.trim().toLowerCase() &&
          c.state === cityToEdit.state
      );
      if (isDuplicate) {
        alert('City already exists in this state.');
        return;
      }
      const updated = cities.map((c) =>
        c === cityToEdit ? { ...c, name: newName.trim() } : c
      );
      setCities(updated);
    }
  };

  // Search Filter
  const filteredCities = cities.filter(
    (city) =>
      city.name.toLowerCase().includes(searchCity.toLowerCase()) &&
      city.state.toLowerCase().includes(searchState.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredCities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCities = filteredCities.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>City-State Manager</h2>

      {/* Add State */}
      <input
        type="text"
        placeholder="Enter state name"
        value={newState}
        onChange={(e) => setNewState(e.target.value)}
      />
      <button onClick={handleAddState}>Save State</button>

      {/* Add City */}
      <div style={{ marginTop: '10px' }}>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Select state</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Enter city name"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
        />
        <button onClick={handleAddCity}>Add City</button>
      </div>

      {/* Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Search */}
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Search City"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Search State"
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
        />
      </div>

      {/* Table */}
      <table border="1" cellPadding="10" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>State</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCities.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No cities found.</td>
            </tr>
          ) : (
            paginatedCities.map((city, index) => (
              <tr key={index}>
                <td>{city.state}</td>
                <td>{city.name}</td>
                <td>
                  <button onClick={() => handleEditCity(city)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDeleteCity(city)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ marginTop: '10px' }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span style={{ margin: '0 10px' }}>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default CityStateManager;
