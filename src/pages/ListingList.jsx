import React, { useState } from 'react';
import ListingForm from './ListingForm';

const ListingList = () => {
  const [listings, setListings] = useState([]);
  const [editing, setEditing] = useState(null);

  const handleCreate = (newListing) => {
    setListings([...listings, { ...newListing, id: Date.now() }]);
  };

  const handleUpdate = (updatedListing) => {
    setListings(listings.map((listing) =>
      listing.id === updatedListing.id ? updatedListing : listing
    ));
    setEditing(null);
  };

  const handleDelete = (id) => {
    setListings(listings.filter((listing) => listing.id !== id));
  };

  return (
    <div className="container mt-3">
      <h2>Event Listings</h2>
      <ListingForm
        listing={editing}
        onSave={editing ? handleUpdate : handleCreate}
        onDelete={handleDelete}
      />
      <div className="mt-5">
        <h3>Created Listings</h3>
        <ul className="list-group">
          {listings.map((listing) => (
            <li key={listing.id} className="list-group-item">
              <h5>{listing.name}</h5>
              <p>Category: {listing.category}</p>
              <button
                className="btn btn-warning"
                onClick={() => setEditing(listing)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger ml-2"
                onClick={() => handleDelete(listing.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListingList;
