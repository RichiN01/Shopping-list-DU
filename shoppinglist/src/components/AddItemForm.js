import React, { useState } from 'react';

const AddItemForm = ({ onAdd }) => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleAddItem = () => {
    if (itemName.trim() === '' || itemQuantity.trim() === '') {
      alert('Please enter both item name and quantity.');
    } else {
      const newItem = {
        id: Date.now(),
        name: itemName,
        quantity: itemQuantity,
        done: false,
      };
      onAdd(newItem);
      setItemName('');
      setItemQuantity('');
    }
  };

  return (
    <div>
      <h2>Add Item</h2>
      <input
        type="text"
        placeholder="Item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Quantity"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default AddItemForm;
