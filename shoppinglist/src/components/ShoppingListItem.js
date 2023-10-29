import React, { useState } from 'react';

const ShoppingListItem = ({ item, onRemove, onToggleDone, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItemName, setEditedItemName] = useState(item.name);

  const handleEditSave = () => {
    onEdit(item.id, editedItemName);
    setIsEditing(false);
  };

  return (
    <div className={item.done ? 'done' : 'undone'}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedItemName}
            onChange={(e) => setEditedItemName(e.target.value)}
          />
          <button onClick={handleEditSave}>Save</button>
        </div>
      ) : (
        <span onClick={() => setIsEditing(true)}>{item.name}</span>
      )}
      <button onClick={() => onToggleDone(item.id)}>
        {item.done ? 'Undo' : 'Done'}
      </button>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default ShoppingListItem;
