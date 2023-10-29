import React, { useState } from 'react';
import ShoppingList from './components/ShoppingList';
import AddItemForm from './components/AddItemForm';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [title, setTitle] = useState('My Shopping List');
  const [isOwner, setIsOwner] = useState(true);
  const [members, setMembers] = useState([
    { userId: 1, name: 'Owner' },
  ]);

  const handleTitleChange = (newTitle) => {
    if (isOwner) {
      setTitle(newTitle);
    } else {
      alert("Only the owner can rename the title.");
    }
  };

  const handleInviteMember = (newMemberId) => {
    if (members.find(member => member.userId === newMemberId)) {
      alert("User is already a member.");
    } else {
      setMembers([...members, { userId: newMemberId, name: `Member ${newMemberId}` }]);
    }
  };

  const handleLeaveList = (memberId) => {
    if (memberId === 1) {
      alert("Owner cannot leave the shopping list.");
    } else {
      const updatedMembers = members.filter(member => member.userId !== memberId);
      setMembers(updatedMembers);
    }
  };

  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, done: false }]);
  };

  const handleRemoveItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const handleToggleDone = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, done: !item.done } : item
    );
    setItems(updatedItems);
  };

  const handleEditItem = (itemId, newName) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, name: newName } : item
    );
    setItems(updatedItems);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
        />
      </h1>
      <button onClick={() => handleInviteMember(2)}>Invite Member 2</button>
      <button onClick={() => handleLeaveList(2)}>Leave Shopping List</button>
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <AddItemForm onAdd={handleAddItem} />
      <ShoppingList
        items={filteredItems}
        onRemove={handleRemoveItem}
        onToggleDone={handleToggleDone}
        onEdit={handleEditItem}
      />
    </div>
  );
};

export default App;
