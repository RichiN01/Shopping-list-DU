import React from 'react';
import ShoppingListItem from './ShoppingListItem';

const ShoppingList = ({ items, onRemove, onToggleDone, onEdit }) => {
  return (
    <div>
      <h2>Shopping List</h2>
      {items.map((item) => (
        <ShoppingListItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          onToggleDone={onToggleDone}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ShoppingList;
